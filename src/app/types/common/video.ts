import { Post } from './base';

export interface Video extends Post {
  thumbnail: string;
  category?: string;
  videoURL: string;
}
