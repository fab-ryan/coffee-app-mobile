export interface Response{
  success: boolean;
  statusCode: number;
  path: string;
  method: string;
  message: string;
  timestamp: Date;
}
