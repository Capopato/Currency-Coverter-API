import axios from "axios";
import config from "../config/config";

export const convertCurrecy = async (from: string, to: string, amount: number) => {
  const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;

  const response = await axios.get(url, config.header);
  const data = await response.data;
  return data;
};

export const latestRateCalculator = async (from: string, to: string) => {
  const url = `https://api.apilayer.com/exchangerates_data/latest?symbols=${to}&base=${from}`;

  const response = await axios.get(url, config.header);
  const data = await response.data;
  return data;
};
