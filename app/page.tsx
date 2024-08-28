'use client'
import React, { useState } from 'react'
import CreateThread from '@/components/CreateThread'
import { Thread } from '../types'

function Page() {
  const [threads, setThreads] = useState<Thread[]>([]);

  const handleCreate = (newThread: Thread) => {
    setThreads(prevThreads => [...prevThreads, newThread]);
  }

  return (
    <>
      <CreateThread onCreate={handleCreate}/>
    </>
  )
}

export default Page