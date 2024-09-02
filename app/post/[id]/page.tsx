// "use client"

// import { Thread } from "@/types"
// import { useParams } from "next/navigation"
// import { useEffect, useState } from 'react'
// import CommentSection from "./_components/CommentSection"

// const Post = () => {
//     const { id } = useParams()
//     const [post, setPost] = useState<Thread | null>(null);

//     useEffect(() => {
//         if (id) {
//             const threads: Thread[] = JSON.parse(localStorage.getItem('threads') || '[]')
//             const foundPost = threads.find((thread) => thread.id === parseInt(id as string))
//             setPost(foundPost || null)
//         }
//     }, [id]);

//     if (!post) {
//         return <div>Loading...</div>
//     }

//     return (
//         <div>
//         <div>
//             <h1>{post.title}</h1>
//             <p>{post.description}</p>
//             <p>Posted by: {post.username}</p>
//             <p>Created on: {post.creationDate}</p>
//         </div>
//         </div>
     
//     )
// }

// export default Post;
import React from 'react'
import ThreadDetails from './_components/ThreadDetails'
import Footer from '@/components/Footer'

function DetailPage() {
  return (
    <>
    <div>DetailPage</div>
    <ThreadDetails />
    <Footer />
    </>
  )
}

export default DetailPage