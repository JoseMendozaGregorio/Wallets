//import router
import { Router } from "express";
//import controller
import { getWallets, postWallets } from "../controllers/wallets.controller";

//instance of router
const router = Router();

//routes
router.get("/api/wallets", getWallets);
router.post("/api/wallet", postWallets);

//export router
export default router;
