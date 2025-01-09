import mongoose, { Schema } from "mongoose";
import {
  ProductFor,
  ProductMaterial,
  ProductSeason,
  ProductStatus,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.ACTIVE,
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
      type: Number,
      required: true,
    },

    productMaterial: {
      type: String,
      enum: ProductMaterial,
      required: true,
    },

    productFor: {
      type: Number,
      enum: ProductFor,
      default: ProductFor.UNI,
    },

    productSeason: {
      type: Number,
      enum: ProductSeason,
      default: ProductSeason.AUTUMN,
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
