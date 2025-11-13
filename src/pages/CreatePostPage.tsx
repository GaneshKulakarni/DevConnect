import CreatePost from '../components/CreatePost';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CreatePostPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-cyan-900/30 bg-slate-900/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm mb-4 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            back
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CreatePost />
      </div>
    </div>
  )
}

export default CreatePostPage