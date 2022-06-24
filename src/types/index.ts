export type User = {
  id: number;
  user_id: string | undefined;
  created_at: string;
  username: string;
  avatar_url: string;
};
export type EditedUser = {
  id: number;
  user_id: string;
  username: string;
  avatar_url: string;
};
export type Podcast = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  user_id: string;
  podcast_url: string;
};
export type EditedPodcast = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  user_id: string;
  podcast_url: string;
};

export type Init = {
  init: number;
};
