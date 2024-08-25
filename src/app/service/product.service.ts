import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    public productList = [
      {
        productName: "Bombay Cat",
        productImg: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Bombay-Cat.jpg?itok=gxXm3cCu",
        productCategory: "cats",
        productId: 1,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Japanese Bobtail Cat",
        productImg: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Japanese-Bobtail-Short-Hair.jpg?itok=nbuY9_-Y",
        productCategory: "cats",
        productId: 2,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Toyger Cat",
        productImg: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Toyger.jpg?itok=oMbZRHSr",
        productCategory: "cats",
        productId: 3,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Abyssinian",
        productImg: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Abyssinian-Cat-Breed_0.jpg?itok=r3GCHbzx",
        productCategory: "cats",
        productId: 4,
        productDesc: "Short Description of Cat",
        price: 50.00
      },
      {
        productName: "Meow Mix Original Choice Dry Cat Food",
        productImg: "https://i5.walmartimages.com/seo/Meow-Mix-Original-Choice-Dry-Cat-Food-22-Pounds_5c5ac33a-ac05-4465-bf8a-2a799bb66b26.95edebef4f70dbd9272fdb183060aaef.jpeg",
        productCategory: "food",
        productId: 5,
        productDesc: "Short Description of Cat Food",
        price: 35.99
      },
      {
        productName: " Royal Canin US Sauce Canned Cat Food",
        productImg: 'https://cdn.royalcanin-weshare-online.io/sD_PTIcBRYZmsWpcyfVQ/v28/00030111442192h-cf-gs1',
        productCategory: "food",
        productId: 6,
        productDesc: "Mother & Babycat Ultra Soft Mousse in Can",
        price: 35.99
      },
      {
        productName: "Meow Mix Irresistibles Treats",
        productImg: "https://i5.walmartimages.com/seo/Meow-Mix-Irresistibles-Cat-Treats-Soft-with-White-Meat-Chicken-12-Ounce-Bag_4c6ad6c3-2402-488f-a685-fb62145486e6.6c0a50ed451d99fc76def3b11e6c91fa.jpeg",
        productCategory: "food",
        productId: 7,
        productDesc: "3 ounces of soft cat treats with white meat Chicken",
        price: 14.99
      },
      {
        productName: "Purina Friskies Cat Treats",
        productImg: "https://m.media-amazon.com/images/I/71+o3umuaGL._AC_UF1000,1000_QL80_.jpg",
        productCategory: "food",
        productId: 8,
        productDesc: " Party Mix - Mixed Girlled Crunch - 6 Ounce Pouches (Pack of 6)",
        price: 14.99
      },
      {
        productName: "Sheri Meow Hut Bed Cover",
        productImg: "https://image.chewy.com/is/image/catalog/200735_MAIN._AC_SL1200_V1696443426_.jpg",
        productCategory: "accessory",
        productId: 9,
        productDesc: "Hut designed to help your cat feel safe and secure.",
        price: 14.99
      },
      {
        productName: "Automatic Cat Feeder and Water Dispenser",
        productImg: "https://m.media-amazon.com/images/I/71KoL2vB8hL._AC_SX679_.jpg",
        productCategory: "accessory",
        productId: 10,
        productDesc: "Set of Pet Food Bowl and Waterer for Cats. (Capacity 1 Gallon per)",
        price: 29.99
      },
      {
        productName: "Rogue Hidden Leaf Ninja Collar",
        productImg: "https://www.pawsonify.com/cdn/shop/products/rogue-ninja-collar-839714_600x.jpg?v=1671662666",
        productCategory: "accessory",
        productId: 11,
        productDesc: "The collar is a tribute to those against the Hidden Left Village.",
        price: 20.00
      },
      {
        productName: "Taiyaki Fish Shaped Bread Hat",
        productImg: "https://i.etsystatic.com/46674237/r/il/86b730/5882412752/il_794xN.5882412752_cdak.jpg",
        productCategory: "accessory",
        productId: 12,
        productDesc: "Pet Cat Costume of a Taiyaki for you kittens or cats.",
        price: 14.99
      },
      {
        productName: "Catstages Toss 'N Twinky Plush Cat Toy",
        productImg: "https://image.chewy.com/is/image/catalog/282271_MAIN._AC_SL1200_V1707169267_.jpg",
        productCategory: "cat toys",
        productId: 13,
        productDesc: "3 Plushes for Cats with Catnip.",
        price: 4.49
      },
      {
        productName: "Frisco Bird with Feathers Teaser Wand",
        productImg: "https://image.chewy.com/is/image/catalog/161199_MAIN._AC_SL1200_V1568240233_.jpg",
        productCategory: "cat toys",
        productId: 14,
        productDesc: "Wand with a Frisco bird attached for your cat to play with.",
        price: 5.99
      },
      {
        productName: "Made4pets Scratching Post",
        productImg: "https://m.media-amazon.com/images/I/71qcgKRFWaL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        productCategory: "cat toys",
        productId: 15,
        productDesc: "17.7' Scratching Post for indoor Cats with a Wooden Ball attached.",
        price: 24.99
      },
      {
        productName: "SmartyKat Skitter Critters Pack",
        productImg: "https://m.media-amazon.com/images/I/61nvwqk-ekL._AC_SL1500_.jpg",
        productCategory: "cat toys",
        productId: 16,
        productDesc: "Set of 10 Catnip Cat Toys",
        price: 7.99
      }
    ]
    getProductById(id: number) {
      const productDetails = this.productList.find(p => p.productId === id);
      return productDetails;
    }
  
    getProductsByCategory(category: string){
      const products = this.productList.filter(p => p.productCategory === category);
      return products;
  }
}
