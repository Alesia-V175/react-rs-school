export interface ICardItem {
  id: string,
  created_at: string,
  updated_at: string,
  promoted_at?: string | null,
  width: number,
  height: number,
  color: string,
  blur_hash: string,
  description: null,
  alt_description: string,
  urls: { [key: string]:string },
  links: { [key: string]:string },
  likes: number,
  liked_by_user: boolean,
  current_user_collections: string[],
  sponsorship: SPONSOR | null,
  topic_submissions: object,
  user: {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string | null,
    twitter_username: string | null,
    portfolio_url: string | null,
    bio: string | null,
    location: string | null,
    links: { [key: string]:string },
    profile_image: { [key: string]:string },
    instagram_username: string | null,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: boolean,
    for_hire: boolean,
    social: {
      instagram_username: string | null,
      portfolio_url: string | null,
      twitter_username: string | null,
      paypal_email: null
    }
  }
}

export interface SPONSOR {
  impression_urls: string[],
  tagline: string,
  tagline_url: string,
  sponsor: {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    twitter_username: null,
    portfolio_url: string,
    bio: string,
    location: null,
    links: { [key: string]:string },
    profile_image: { [key: string]:string },
    instagram_username: null,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: boolean,
    for_hire: boolean,
    social: {
      instagram_username: null,
      portfolio_url: string,
      twitter_username: null,
      paypal_email: null
    }
  }
}

export interface ICardsList {
  cards?: ICardItem[];
}
