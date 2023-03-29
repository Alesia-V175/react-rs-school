import { CardItemKeys } from './types';

export interface ICardItem {
  id: string,
  created_at: string,
  updated_at: string,
  promoted_at?: string | null,
  width: number,
  height: number,
  color: string,
  blur_hash: string,
  description: string | null,
  alt_description: string,
  urls: CardItemKeys,
  links: CardItemKeys,
  likes: number,
  liked_by_user: boolean,
  current_user_collections: string[],
  sponsorship: ISponsor | null,
  topic_submissions: object,
  user: IUser,
}

export interface IUser {
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
  links: CardItemKeys,
  profile_image: CardItemKeys,
  instagram_username: string | null,
  total_collections: number,
  total_likes: number,
  total_photos: number,
  accepted_tos: boolean,
  for_hire: boolean,
  social: ISocial
}

export interface ISocial {
  instagram_username: string | null,
  portfolio_url: string | null,
  twitter_username: string | null,
  paypal_email: null
}

export interface ISponsor {
  impression_urls: string[],
  tagline: string,
  tagline_url: string,
  sponsor: IUser
}

export interface ICardsList {
  cards?: ICardItem[];
}

export interface IFormCard {
  name: string,
  email: string,
  date: string,
  payment: string,
  type: string,
  confirm: string,
  avatar: string,
}

export interface IFormCards {
  items: IFormCard[],
}

export interface IFormFields {
  onSelect: (item: IFormCard) => void;
}

export interface IFormState {
  file: string,
  firstNameError: string,
  emailError: string,
  dateError: string,
  paymentError: string,
  avatarError: string,
  checkboxError: string,
  selectError: string,
  avatar: string,
  isShowPopup: boolean,
}
