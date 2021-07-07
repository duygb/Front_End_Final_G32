import { Component, DoCheck } from "@angular/core";
import { Cart } from "src/common-module/cart";
import { Product } from "src/common-module/product";
import { PromoCode } from "src/common-module/promo-code";
import { SaleProduct } from "src/common-module/sale-product";
import { SummaryCart } from "src/common-module/summary-cart";
import { MyServerHttpService } from "../Services/my-server-http-service.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements DoCheck {
  title = 'angular-shopping-cart';
  numberItems = 0;
  summaryCart: SummaryCart = {
    subTotal: 0,
    taxPercent: 10,
    tax: 0,
    discountPercent: 0,
    discount: 0,
    total: 0,
  };
  cart!: Cart;
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10,
    },
    {
      code: 'WINTER',
      discountPercent: 20,
    },
  ];
  constructor(private myServer: MyServerHttpService) {
    this.myServer.getCart().subscribe((data) => {
      this.cart = data;
    });
  }
  ngDoCheck() {
    console.log('ngDoCheck()');
    this.numberItems = 0;
    this.summaryCart.subTotal = 0;

    // Number Item and subTotal
    this.cart.products.forEach((product) => {
      this.numberItems += product.quantity;
      this.summaryCart.subTotal += product.quantity * product.price;
    });
    // Discount
    this.summaryCart.discount =
      (this.summaryCart.subTotal * this.summaryCart.discountPercent) / 100;
    // Tax
    this.summaryCart.tax =
      ((this.summaryCart.subTotal - this.summaryCart.discount) *
        this.summaryCart.taxPercent) /
      100;
    
      // Number Item and subTotal
    if(this.cart.products != null){
      this.cart.saleProducts.forEach((saleProduct) => {
        this.numberItems += saleProduct.quantity;
        this.summaryCart.subTotal += saleProduct.quantity * saleProduct.priceToBuy;
      });
    }
    // Discount
    this.summaryCart.discount =
      (this.summaryCart.subTotal * this.summaryCart.discountPercent) / 100;
    // Tax
    this.summaryCart.tax =
      ((this.summaryCart.subTotal - this.summaryCart.discount) *
        this.summaryCart.taxPercent) /
      100;
  }
  findProductByID(id: number): Product{
    return this.cart.products.find((product) => product.id === id) as Product;
  }
  findSaleProductByID(id: number): SaleProduct{
    return this.cart.saleProducts.find((product) => product.id === id) as SaleProduct;
  }
  handleUpdateQuantity(p: {item: any, inputQuantityValue: number}) {
    if(p.item instanceof Product != null){
      p.item as Product;
      let itemIndex: number = p.item.id;
      let itemInCart= this.findProductByID(itemIndex);
      if(itemInCart){
        this.findProductByID(itemIndex).quantity = p.inputQuantityValue;
      }
    }else if(p.item instanceof SaleProduct != null){
      p.item as SaleProduct;
      let itemIndex: number = p.item.id;
      let itemInCart= this.findSaleProductByID(itemIndex);
      if(itemInCart){
        this.findSaleProductByID(itemIndex).quantity = p.inputQuantityValue;
      }
    }
  }
  handleRemoveProduct(item: any) {
    if(item instanceof Product != null){
      item as Product;
      let itemIndex: number = item.id;
      let itemInCart = this.findProductByID(itemIndex);
      if (itemInCart && itemIndex !== -1) {
        this.cart.products.splice(itemIndex, 1);
      }
    }else  if(item instanceof SaleProduct != null){
      item as SaleProduct;
      let itemIndex: number = item.id;
      let itemInCart = this.findSaleProductByID(itemIndex);
      if (itemInCart && itemIndex !== -1) {
        this.cart.products.splice(itemIndex, 1);
      }
    }
  }
  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      (promoCode) => promoCode.code === code
    );
    // check promoCode có tồn tại khôngw
    this.summaryCart.discountPercent = promoCode
      ? promoCode.discountPercent
      : 0;
    this.summaryCart.discount =
      (this.summaryCart.subTotal * this.summaryCart.discountPercent) / 100;

    if (this.summaryCart.discount > 0) {
      alert(`The promotional code was applied.`);
    } else if (promoCode == null) {
      alert(`Code is not exist.`);
    }
  }
}
