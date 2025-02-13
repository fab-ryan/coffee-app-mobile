import { Response } from './response';
import { IProduct } from './product';
export interface CategoriesResponse extends Response {
  data: ICategory[];
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  deleted_at: null;
  products?: IProduct[];
}
