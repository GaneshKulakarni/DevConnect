import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import LoginPage from './pages/LoginPage.tsx'
import CreatePostPage from './pages/CreatePostPage.tsx'
import Navbar from './components/Navbar.tsx'
import PostPage from './pages/PostPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import CreateCommunityPage from './pages/CreateCommunityPage.tsx'
import { CommunityPage } from './pages/CommunityPage.tsx'
import { CommunitiesPage } from './pages/CommunitiesPage.tsx'
import EditPostPage from './pages/EditPostPage.tsx'
import MessagesPage from './pages/MessagesPage.tsx'


function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} /> {/* Reuse LoginPage for now */}
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit-post/:id" element={<EditPostPage />} />
            <Route path="/communities/create" element={<CreateCommunityPage />} />
            <Route path="/communities" element={<CommunitiesPage />} />
            <Route path="/communities/:id" element={<CommunityPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/events" element={<div className="min-h-screen bg-slate-950 text-white p-8"><h1 className="text-3xl font-mono text-cyan-400">Events - Coming Soon</h1></div>} />
            <Route path="/contributors" element={<div className="min-h-screen bg-slate-950 text-white p-8"><h1 className="text-3xl font-mono text-cyan-400">Contributors - Coming Soon</h1></div>} />

          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
