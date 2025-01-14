import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductFor,
  ProductMaterial,
  ProductSeason,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productSize: number;
  productMaterial: ProductMaterial;
  productFor: ProductFor;
  productSeason: ProductSeason;
  productDesc?: string;
  productImages: string[];
  productLeftCount: number;
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  productCollection: any;
  order: string;
  page: number;
  limit: number;
  search?: string;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productSize: number;
  productMaterial: ProductMaterial;
  productFor?: ProductFor;
  productSeason?: ProductSeason;
  productDesc?: string;
  productImages?: string[];
  productLeftCount: number;
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: number;
  productMaterial?: ProductMaterial;
  productFor?: ProductFor;
  productSeason?: ProductSeason;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
