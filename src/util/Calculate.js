import { truncToTwo } from "./Util";

export const calculateGst = (...params) => {
    return params.reduce((price, gstRate) => {
        const gstAmount = price - (price * (100 / (100 + parseInt(gstRate))));
        const gstExclusivePrice = price - gstAmount;
        return gstExclusivePrice;
    });
}

export {truncToTwo};