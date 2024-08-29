import React from 'react'
import { Thread } from '@/types'

interface ThreadCardProps {
  thread: Thread
}

const ThreadCard: React.FC<ThreadCardProps> = ({ thread }) => {
  return (
    <div className="w-2/4 m-auto p-2 border-2 mt-2">
      <h2>Title: {thread.title}</h2>
      <p>Description: {thread.description}</p>
      <p>By: {thread.username}</p>
      <p>Created on: {thread.creationDate}</p>
    </div>
  );
};

export default ThreadCard