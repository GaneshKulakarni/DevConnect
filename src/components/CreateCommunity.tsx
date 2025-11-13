import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../supabase-client";

interface CommunityInput {
  name: string;
  description: string;
}
const createCommunity = async (community: CommunityInput) => {
  const { error, data } = await supabase.from("Communities").insert(community);

  if (error) throw new Error(error.message);
  return data;
};

export const CreateCommunity = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createCommunity,
    onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["communities"] });
    navigate("/communities");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Create a New Community</h2>
        
        {isError && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">Error creating community. Please try again.</div>}
        
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Community Name
            </label>
            <input
                type="text"
                id="name"
                value={name} // Added value binding
                className="border border-gray-300 p-2 w-full rounded-md"
                placeholder="Enter community name"
                required
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-6"> {/* Increased bottom margin for better spacing */}
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
            </label>
            <textarea
                id="description"
                value={description} // Added value binding
                className="border border-gray-300 p-2 w-full rounded-md"
                placeholder="Enter community description"
                rows={4}
                required
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </div>
        <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-md text-white font-medium transition"
        >
           {isPending ? 'Creating...' : 'Create Community'}
        </button>
    </form>
  )
}

export default CreateCommunity