import https from "https";
export const getCurrencyData = (currency, callback) => {
    let sendData = "";
    const options = {
        host: `api.binance.com`,
        port: 443,
        path: `/api/v3/ticker/price?symbol=${currency}`,
        method: 'GET'
    };
    https.request(options, (response) => {
        response.on("data", (data) => {
            sendData += data;
        });
        response.on("error", (error) => {
            console.log(error);
        });
        response.on("end", () => {
            callback(sendData);
        });
    }).end();
};
