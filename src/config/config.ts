import dotenv from "dotenv";

dotenv.config();

const accessToken = process.env.ACCESSTOKEN || "";
const port = process.env.port || 3001;
const header = {
  headers: {
    apikey: process.env.ACCESSTOKEN,
  },
};
const currencies = {
  AustralianDollar: "AUD",
  Real: "BRL",
  Lev: "BGN",
  CanadianDollar: "CAD",
  Pound: "GBP",
  Dollar: "USD",
  Euro: "EUR",
  Yuan: "CNH",
  JapaneseYen: "JPY",
};

export default {
  accessToken,
  port,
  header,
  currencies,
};
