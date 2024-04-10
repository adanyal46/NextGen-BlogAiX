'use client'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'
export default withPageAuthRequired(function Page() {
  return (
    <div>
      <h2>Users</h2>
    </div>
  )
})
