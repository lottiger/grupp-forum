import React from 'react'
import { Thread } from '@/types'
import { useRouter } from 'next/navigation'

interface ThreadCardProps {
  thread: Thread
}

const ThreadCard: React.FC<ThreadCardProps> = ({ thread }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/post/${thread.id}`)
    };

    return (
        <div onClick={handleClick} className="w-2/4 m-auto p-2 border-2 mt-2 cursor-pointer">
            <h2>Title: {thread.title}</h2>
            <p>Description: {thread.description}</p>
            <p>By: {thread.username}</p>
            <p>Created on: {thread.creationDate}</p>
        </div>
    );
};

export default ThreadCard