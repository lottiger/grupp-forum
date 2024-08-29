"use client"

import { Thread } from "@/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from 'react'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState<Thread | null>(null);

    useEffect(() => {
        if (id) {
            const threads: Thread[] = JSON.parse(localStorage.getItem('threads') || '[]')
            const foundPost = threads.find((thread) => thread.id === parseInt(id as string))
            setPost(foundPost || null)
        }
    }, [id]);

    if (!post) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>Posted by: {post.username}</p>
            <p>Created on: {post.creationDate}</p>
        </div>
    )
}

export default Post;