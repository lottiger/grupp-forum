"use client"

import { Thread, Comment } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import CommentSection from "./CommentSection";

const ThreadDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Thread | null>(null);

    useEffect(() => {
        if (id) {
            const threads: Thread[] = JSON.parse(localStorage.getItem('threads') || '[]');
            const foundPost = threads.find((thread) => thread.id === parseInt(id as string));

            
            if (foundPost) {
                foundPost.comments = foundPost.comments || [];
            }

            setPost(foundPost || null);
        }
    }, [id]);

    const handleAddComment = (newComment: Comment) => {
        if (!post) return;

        const updatedPost: Thread = {
            ...post,
            comments: [...post.comments, newComment]
        };

        setPost(updatedPost);

        const threads: Thread[] = JSON.parse(localStorage.getItem('threads') || '[]');
        const updatedThreads = threads.map((thread) =>
            thread.id === updatedPost.id ? updatedPost : thread
        );

        localStorage.setItem('threads', JSON.stringify(updatedThreads));
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-rows-1 w-2/4 m-auto p-2 border-2 mt-2 cursor-pointer text-center rounded-xl">
            <div>
                <h1 className="font-semibold text-lg ">{post.title}</h1>
                <p>{post.description}</p>
            </div>
            <div className="flex items-center justify-between">
                <p className="mt-4 text-sm">{post.username}</p>
                <p className="text-sm">{post.creationDate}</p>
            </div>
            <CommentSection thread={post} onAddComment={handleAddComment} />
        </div>
    );
};

export default ThreadDetail;
