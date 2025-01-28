import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductFor,
  ProductSeason,
  ProductSize,
  ProductStatus,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.ACTIVE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.SIZE250,
    },

    productFor: {
      type: String,
      enum: ProductFor,
      default: ProductFor.UNI,
    },

    productSeason: {
      type: String,
      enum: ProductSeason,
      default: ProductSeason.ALLSEASON,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // updatedat, createdat
);

productSchema.index({ productName: 1, productSize: 1 }, { unique: true });
export default mongoose.model("Product", productSchema);
