export interface PendingOrderItem {
  [x: string]: any;
  id: number;
  productName: string;
  thumbnail: string;
  discountPercent: number;
  priceUnit: number;
  totalPrice: number;
  quantity: number;
  brand:string;

}
