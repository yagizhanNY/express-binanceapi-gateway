import express, { Application, Request, Response } from "express";
import https from "https";
import { getCurrencyData } from "./libs/binance-api-client.js"

const app : Application = express();

app.get("/", (req : Request, res : Response) => {
    res.send("This is the gateway for Binance API. You can get current currency about anycoin."
    + "For example: /CHZUSDT receives you current CHZUSDT currency.");
});

app.get("/:currency", async (req : Request, res : Response) => {
    const currency : string = req.params.currency;

    getCurrencyData(currency, (result : string) => {
        res.send(result);
    })

});

app.listen("5000", () => console.log("Server running"));