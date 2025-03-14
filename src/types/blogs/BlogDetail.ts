import { Blog, Category } from "./Blogs";

export interface Destination {
  id: number;
  name: string;
  image_url: string;
  url: string;
  starts_at?: string;
}

export interface BlogDetail extends Blog {
  content: string;
  destination_1: Destination;
  destination_2: Destination;
}

export interface BlogDetailData {
  blog: BlogDetail;
  categories: Category[];
  related_blogs: Blog[];
}

export interface BlogDetailResponse {
  status: boolean;
  data: BlogDetailData;
}
