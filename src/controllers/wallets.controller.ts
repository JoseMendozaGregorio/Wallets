//import requesthandler
import { RequestHandler } from "express";
//import links model
import Wallets, { IWallets } from "../models/wallets.model";
//import valid url
import validUrl from "valid-url";

//get controler
export const getWallets: RequestHandler = async (req, res, next) => {
  try {
    const wallets = await Wallets.find();
    res.status(200).send(wallets);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const postWallets: RequestHandler = async (req, res, next) => {
  try {
    const { wallet, price } = req.body;
    if (!wallet || !price) {
      throw new Error("Wallet and price are required");
    } else {
      const newWallet = new Wallets({ wallet, price });
      await newWallet.save();
      res.status(201).send(newWallet);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
