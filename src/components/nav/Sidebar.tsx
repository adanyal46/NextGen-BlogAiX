'use client'
import React from 'react'
import { Button, ConfigProvider, Divider, Flex, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { MdOutlinePostAdd } from 'react-icons/md'
import Title from 'antd/es/typography/Title'
import { useRouter } from 'next/navigation'
import { CiBoxList } from 'react-icons/ci'

const Sidebar = () => {
  const router = useRouter()
  const handleMenu = ({ key }: any) => {
    if (key) {
      router.push('/' + key)
    }
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: '#046a61',
            algorithm: true,
          },
          Menu: {
            colorBgContainer: '#046a61',
            itemColor: '#fff',
            itemHoverColor: '#ccc',
            itemSelectedBg: '#00000042',
          },
          Typography: {
            colorText: '#fff',
            colorTextHeading: '#fff',
          },
          Divider: {
            colorSplit: '#eee',
          },
        },
      }}
    >
      <Sider width={240} style={{ height: 'calc(100vh - 65px)' }}>
        <Flex vertical justify="space-between" style={{ height: '100%' }}>
          <Menu
            onClick={handleMenu}
            mode="inline"
            defaultSelectedKeys={['new']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={[
              {
                key: `new`,
                label: 'New',
                icon: <MdOutlinePostAdd size={20} style={{ marginRight: '5px', marginTop: '-1px' }} />,
              },
              {
                key: `post`,
                label: 'Post',
                icon: <CiBoxList size={20} style={{ marginRight: '5px', marginTop: '-1px' }} />,
              },
            ]}
          />
          <Flex vertical style={{ backgroundColor: '#046a61' }} justify="center">
            <Divider />
            <Flex justify="space-between" gap={'small'} align="center" className="w-100" style={{ paddingInline: '10px', marginBottom: '20px' }}>
              <Title level={4} className="my-0">
                Credit: 0
              </Title>
              <Button type="primary">Buy Credit</Button>
            </Flex>
          </Flex>
        </Flex>
      </Sider>
    </ConfigProvider>
  )
}

export default Sidebar
