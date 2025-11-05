'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Bookmark } from 'lucide-react';
import type { Post } from '@/data';

export default function PostActions({ post }: { post: Post }) {
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-3">
        <button
          onClick={() => toggleLike(post.id)}
          className="transition-transform hover:scale-125 duration-200"
        >
          <Heart
            className={`w-6 h-6 ${
              likedPosts[post.id]
                ? 'fill-[#C9A88A] stroke-[#C9A88A]'
                : 'stroke-[#6B5649]'
            }`}
          />
        </button>
        <button className="transition-transform hover:scale-125 duration-200">
          <MessageCircle className="w-6 h-6 stroke-[#6B5649]" />
        </button>
        <button className="ml-auto transition-transform hover:scale-125 duration-200">
          <Bookmark className="w-6 h-6 stroke-[#6B5649]" />
        </button>
      </div>

      <p className="text-[#6B5649] text-sm font-light mb-2">
        {post.likes + (likedPosts[post.id] ? 1 : 0)}件のいいね
      </p>

      <p className="text-[#6B5649] text-sm font-light leading-relaxed">
        <span className="font-normal">{post.user}</span> {post.caption}
      </p>
    </div>
  );
}
