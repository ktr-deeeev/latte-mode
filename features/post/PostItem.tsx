import { posts } from '@/data';
import PostActions from './PostActions';

export default function PostItem() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-4 border-[#E8DFD8]"
        >
          {/* Post Header */}
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#F5F1ED] to-[#E8DFD8]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A88A] to-[#8B6F47] flex items-center justify-center text-xl shadow-md">
              {post.avatar}
            </div>
            <div className="flex-1">
              <p className="text-[#6B5649] font-light text-sm">{post.user}</p>
              <p className="text-[#A0907E] text-xs">{post.time}</p>
            </div>
          </div>

          {/* Post Image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={post.image}
              alt="Cafe post"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <PostActions post={post} />
        </article>
      ))}
    </div>
  );
}
