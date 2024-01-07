export interface IProduct {
  id: string;
  name: string;
  description: string;
  roasted: string;
  ingredients: string;
  special_ingredient: string;
  image_landscape: string;
  image_portrait: string;
  status: boolean;
  created_at: Date;
  deleted_at: null;
}
