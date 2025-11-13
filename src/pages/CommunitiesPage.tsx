import CommunityList from "../components/CommunityList";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const CommunitiesPage = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section (Max width remains 7xl for full-bleed background) */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-cyan-900/30 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Title and CTA */}
            <div>
              <h1 className="text-6xl font-bold font-mono mb-4 text-white leading-tight">
                <span className="text-cyan-400">Join</span>
                <span className="text-gray-200">/Build</span>
              </h1>
              <p className="text-xl text-gray-400 font-mono mb-8">
                Explore, connect, and collaborate in themed development communities.
              </p>
              
              <Link 
                to="/communities/create"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-400/50 rounded-lg text-cyan-300 font-mono font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-fit"
              >
                <Plus className="w-5 h-5" />
                create new community
              </Link>
            </div>
            
            {/* Right Column: Code Block Graphic */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-900/30 rounded-lg p-8 font-mono text-sm text-gray-300">
                <div className="text-green-400">// Explore the communities</div>
                <div className="text-cyan-400 mt-2">const communities <span className="text-emerald-400">=</span> <span className="text-emerald-400">{'['}</span></div>
                <div className="ml-4 text-gray-400 mt-1">
                  <span className="text-emerald-400">{'{'}</span> name: <span className="text-yellow-400">'WebDev'</span>, members: 1024 <span className="text-emerald-400">{'}'}</span>,
                </div>
                <div className="ml-4 text-gray-400">
                  <span className="text-emerald-400">{'{'}</span> name: <span className="text-yellow-400">'MachineLearning'</span>, members: 512 <span className="text-emerald-400">{'}'}</span>,
                </div>
                <div className="text-cyan-400">
                  <span className="text-emerald-400">{']'}</span>
                </div>
                <div className="text-cyan-400 mt-2">join<span className="text-emerald-400">.</span>connect<span className="text-emerald-400">()</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section: max-w-5xl applied here for better margins */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        {/* Title for the list */}
        <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold font-mono text-white mb-2">
                <span className="text-cyan-400">~/</span>all_communities
            </h2>
            <p className="text-gray-400 font-mono text-sm">
                find your dev tribe
            </p>
        </div>
        <CommunityList />
      </div>
    </div>
  );
};