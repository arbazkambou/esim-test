export interface Blogs {
  status: boolean;
  data: {
    meta: BlogMeta;
    blogs: Blog[];
    categories: Category[];
    meta_title: string;
    meta_description: string;
  };
}

export interface BlogMeta {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}

export interface Blog {
  name: string;
  blog_category_id: number | null;
  sub_content: string;
  created_at: string;
  updated_at: string;
  image: string | null;
  thumbnail: string | null;
  slug: string;
  time: string;
  author_name: string;
  author_image: string;
  category: Category | null;
  keywords: string;
}

export interface Category {
  id: string;
  name: string;
  parent: string | null;
  created_at: string;
  updated_at: string;
  slug: string;
}
