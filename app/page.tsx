'use client'
import React, { useEffect, useState } from 'react'
import CreateThread from '@/components/CreateThread'
import { Thread } from '../types'
import ThreadCard from '@/components/ThreadCard'

function Page() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const savedThreads = JSON.parse(localStorage.getItem('threads') || '[]')
    setThreads(savedThreads)
  }, []);

  const handleCreate = (newThread: Thread) => {
    const updatedThreads = [...threads, newThread]
    setThreads(updatedThreads)
    localStorage.setItem('threads', JSON.stringify(updatedThreads))
  }

  const handleClear = () => {
    localStorage.clear()
    setThreads([])
  }

  return (
    <>
      <CreateThread onCreate={handleCreate}/>
      <button onClick={handleClear}>Clear Local Storage</button>
      <div>
        {threads.map(thread => (
          <ThreadCard key={thread.id} thread={thread}/>
        ))}
      </div>
    </>
  )
}

export default Page
