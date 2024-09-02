import React from 'react'
import { Thread } from '@/types'
import { useRouter } from 'next/navigation'

interface ThreadCardProps {
  thread: Thread
}

const ThreadCard = ({ thread }: ThreadCardProps): JSX.Element => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/post/${thread.id}`)
    };

    return (
        <div onClick={handleClick} className="w-2/4 m-auto p-2 border-2 mt-2 cursor-pointer">
            <h2>Titel: {thread.title}</h2>
            <p>Beskrivning: {thread.description}</p>
            <p>Av: {thread.username}</p>
            <p>Skapad: {thread.creationDate}</p>
        </div>
    );
};

export default ThreadCard