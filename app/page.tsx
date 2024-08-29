'use client'
import React, { useState } from 'react'
import CreateThread from '@/components/CreateThread'
import { Thread } from '../types'
import ThreadCard from '@/components/ThreadCard';

function Page() {
  const [threads, setThreads] = useState<Thread[]>([]);

  const handleCreate = (newThread: Thread) => {
    setThreads(prevThreads => [...prevThreads, newThread]);
  }

  // Vill vi ändra fil strukturen så att vi har main page i en pages mapp?

  return (
    <>
      <CreateThread onCreate={handleCreate}/>
      <div>
        {threads.map(thread => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </>
  )
}

export default Page