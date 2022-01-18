//import schema model Document
import { Schema, model, Document, Date, ObjectId } from "mongoose";

//create interface for the model
export interface IWallets extends Document {
  wallet: string;
  price: number;
}

//create schema for the model
const WalletSchema = new Schema<IWallets>({
  wallet: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
});

//export model
export default model<IWallets>("Wallet", WalletSchema);
