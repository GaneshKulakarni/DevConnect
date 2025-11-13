import React from 'react'
import PostDetail from '../components/PostDetail';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-cyan-900/30 bg-slate-900/50 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            back to posts
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PostDetail postId={Number(id)} />
      </div>
    </div>
  )
}

export default PostPage