import { supabase } from "../supabase-client";

interface Post {
  id: number;
  title: string;
  content: string;
  community_id: number;
  user_id: string;
  created_at: string;
  communities?: {
    name: string;
  };
}

export const fetchCommunityPost = async (
  communityId: number
): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, communities(name)")
    .eq("community_id", communityId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data as Post[];
};
