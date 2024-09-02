'use client'
import React, { useEffect, useState } from 'react'
import CreateThread from '@/components/CreateThread'
import { Thread } from '../types'
import ThreadCard from '@/components/ThreadCard'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function Page() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const savedThreads = JSON.parse(localStorage.getItem('threads') || '[]')
    setThreads(savedThreads)
  }, []);

  const handleCreate = (newThread: Thread) => {
    const updatedThreads = [newThread, ...threads]
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
      <div>
        <div className="flex justify-center">
          <Button onClick={handleClear} className="w-30">Clear Local Storage</Button>
        </div>
        {threads.map(thread => (
          <ThreadCard key={thread.id} thread={thread}/>
    
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Page
