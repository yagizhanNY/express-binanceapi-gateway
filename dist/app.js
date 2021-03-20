import express from "express";
import https from "https";
const app = express();
app.get("/", (req, res) => {
    res.send("This is the gateway for Binance API. You can get current currency about anycoin."
        + "For example: /CHZUSDT receives you current CHZUSDT currency.");
});
app.get("/:currency", (req, res) => {
    const currency = req.params.currency;
    const options = {
        host: `api.binance.com`,
        port: 443,
        path: `/api/v3/ticker/price?symbol=${currency}`,
        method: 'GET'
    };
    https.request(options, (response) => {
        response.on("data", (data) => {
            const responseData = JSON.parse(data);
            res.send(responseData);
        });
        response.on("error", (error) => {
            console.log(error);
        });
    }).end();
});
app.listen("5000", () => console.log("Server running"));
