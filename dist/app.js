var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { getCurrencyData } from "./libs/binance-api-client.js";
const app = express();
app.get("/", (req, res) => {
    res.send("This is the gateway for Binance API. You can get current currency about anycoin."
        + "For example: /CHZUSDT receives you current CHZUSDT currency.");
});
app.get("/:currency", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currency = req.params.currency;
    getCurrencyData(currency, (result) => {
        res.send(result);
    });
}));
app.listen("5000", () => console.log("Server running"));
