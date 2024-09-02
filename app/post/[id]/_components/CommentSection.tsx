"use client";
import React, { useState } from 'react';
import { Comment, Thread } from '@/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

interface CommentSectionProps {
  thread: Thread;
  onAddComment: (comment: Comment) => void;
}

function CommentSection({ thread, onAddComment }: CommentSectionProps): JSX.Element {
  const [commentText, setCommentText] = useState("");
  const [username, setUsername] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !username.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      username: username,
      content: commentText,
      createdAt: new Date().toISOString(),
    };

    onAddComment(newComment);
    setCommentText("");
    setUsername("");
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleAddComment}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-2 rounded border-gray-300"
            placeholder="Användarnamn"
            required
          />
          <Textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full p-2 rounded border-gray-300"
            rows={3}
            placeholder="Skriv en kommentar..."
            required
          />
          <Button type="submit"
           className='bg-gray-600 text-white hover:bg-gray-700 rounded w-full my-4'>
            Lägg till
          </Button>
        </form>
      </div>
      
      {Array.isArray(thread.comments) && thread.comments.length > 0 ? (
        thread.comments.map((comment) => (
          <div key={comment.id} className="border-b p-2">
            <p><strong>{comment.username}</strong>: {comment.content}</p>
            <p><small>{new Date(comment.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</small></p>
          </div>
        ))
      ) : (
        <p>Inga kommentarer än.</p>
      )}
      
    </div>
  );
}

export default CommentSection;