export interface TopDestination {
  id: number;
  name: string;
  slug: string;
  cover_image: string;
  image_url: string;
}

export interface TopDestinations {
  status: boolean;
  data: TopDestination[];
}
