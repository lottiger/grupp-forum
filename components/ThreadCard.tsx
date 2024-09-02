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
        <div onClick={handleClick} className="w-2/4 m-auto p-2 border-2 mt-2 cursor-pointer rounded-xl">
            <div className='text-center font-bold text-lg'>{thread.title}</div>
            <p className='text-center'>{thread.description}</p>
            <div className="flex justify-between mt-8">
                <p className='text-sm'>{thread.username}</p>
                <p className='text-sm'>{thread.creationDate}</p>
            </div>
        </div>
    );
};

export default ThreadCard