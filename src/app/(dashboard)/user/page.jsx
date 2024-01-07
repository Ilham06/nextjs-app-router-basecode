'use client'

import React from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <Button title='create user' variant='contained' onClick={() => router.push('/user/create')}>Create User</Button>
    </div>
  )
}
