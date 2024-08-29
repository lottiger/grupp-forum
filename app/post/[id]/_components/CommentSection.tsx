"use client";

import React, { useState } from "react";
import { Comment, Thread } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface CommentSectionProps {
  thread: Thread;
  onAddComment: (comment: Comment) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ thread, onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      username: "Current User", // Ersätt med riktig användare
      content: commentText,
      createdAt: new Date().toISOString(),
    };

    onAddComment(newComment);
    setCommentText("");
  };

  return (
    <div>
      
      {thread.comments && thread.comments.length > 0 ? (
        thread.comments.map((comment) => (
          <div key={comment.id} className="border-b p-2">
            <p>
              {comment.username}: {comment.content}
            </p>
            <p>
              <small>{new Date(comment.createdAt).toLocaleString()}</small>
            </p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
      <div className="mt-4">
        <Textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full border p-2"
          rows={3}
          placeholder="Write a comment..."
        />
        <Button
          onClick={handleAddComment}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
