import { Coupon } from 'src/app/core/models/coupon/coupon';
export interface SummaryCart{
  subTotal: number,
  tax: number,
  grandTotal: number,
  coupon: Coupon,
}
