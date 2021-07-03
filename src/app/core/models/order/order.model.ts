import { Age } from "./age.model"

export interface Order {
  id: string;
  name: string;
  brand: string;
  sku: string;
  thumbnail: string;
  discountPercent: number;
  quantity: number;
  basePrice: number;
  priceToBuy: number;
  age: Age[];
  sex: string;
}
