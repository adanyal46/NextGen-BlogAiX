'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import Title from 'antd/es/typography/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { user, error, isLoading } = useUser()

  return (
    <main>
      <Title level={4}>Welcome {user?.name}!</Title>
    </main>
  )
}
