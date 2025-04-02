export interface HelpCenterCategory {
  id: number;
  slug: string;
  name: string;
  created_at: string;
  updated_at: string;
  image_url: string;
}

export interface HelpCenterQuestion {
  id: number;
  help_center_category_id: number;
  slug: string;
  keywords: string;
  added_by: string;
  name: string;
  sub_content: string;
  created_at: string;
  updated_at: string;
  category: HelpCenterCategory;
}

export interface HelpCenterCategories {
  status: boolean;
  data: {
    categories: HelpCenterCategory[];
    help_center_questions: HelpCenterQuestion[];
    recent_help_center_question: HelpCenterQuestion[];
    meta_title: string;
    meta_description: string;
  };
}

export interface QuesntionDetail {
  id: number;
  help_center_category_id: number;
  slug: string;
  keywords: string;
  added_by: string;
  name: string;
  sub_content: string;
  content: string;
  created_at: string;
  updated_at: string;
  publish: number;
  author_name: string;
  author_image: string;
  category: HelpCenterCategory;
}
export interface HelpCenterQuestionDetail {
  status: boolean;
  data: {
    helpCenter: QuesntionDetail;
    related_questions: HelpCenterQuestion[];
  };
}
