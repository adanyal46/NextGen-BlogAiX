'use client'
import React from 'react'
import { Avatar, Button, ConfigProvider, Dropdown, Flex, Space, Spin } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { CiUser } from 'react-icons/ci'
import { VscSignOut } from 'react-icons/vsc'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
const Navbar = () => {
  const { user, isLoading } = useUser()
  const router = useRouter()

  const items = [
    {
      label: 'Profile',
      key: 'profile',
      icon: <CiUser size={20} />,
    },
    {
      label: 'Logout',
      key: 'logout',
      icon: <VscSignOut size={20} color="red" />,
    },
  ]

  const handleMenuChange = ({ key }: any) => {
    if (key === 'profile') {
      router.push('/profile')
      return
    }
    if (key === 'logout') {
      router.push('/api/auth/logout')

      return
    }
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#046a61',
            algorithm: true,
          },
          Typography: {
            colorText: '#fff',
            colorTextDescription: '#fff',
            colorTextHeading: '#fff',
          },
        },
      }}
    >
      <Header>
        <Space className="w-100" direction="vertical">
          <Flex justify="space-between" align="center" flex={1} className="w-100">
            <Title className="my-0" level={4}>
              NextGen-BlogAiX
            </Title>
            {user ? (
              <Dropdown overlayStyle={{ width: '200px' }} trigger={['click']} menu={{ items, onClick: handleMenuChange }}>
                <Flex align="center" gap={'small'} style={{ cursor: 'pointer' }}>
                  <Flex vertical align="end">
                    <Title className="my-0" level={5}>
                      Welcome
                    </Title>
                    <Text>{user?.name}</Text>
                  </Flex>
                  <Avatar src={<img src={user?.picture || url} alt="avatar" />} />
                </Flex>
              </Dropdown>
            ) : (
              <>
                {isLoading ? (
                  <Spin />
                ) : (
                  <Link href={'/api/auth/login'}>
                    <Button style={{ width: '180px' }}>Log In</Button>
                  </Link>
                )}
              </>
            )}
          </Flex>
        </Space>
      </Header>
    </ConfigProvider>
  )
}

export default Navbar
