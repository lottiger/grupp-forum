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

      // TODO: Göra en component av threadcard och styla
      <div className="w-2/4 m-auto p-2 border-">
        {threads.map(thread => (
          <div key={thread.id}>
            <h2>Title: {thread.title}</h2>
            <p>Description: {thread.description}</p>
            <p>By: {thread.username}</p>
            <p>Created on: {thread.creationDate}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Page