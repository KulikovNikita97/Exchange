import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/bitcoin",
});

export const getBitcionAPI = () => {
  return instance.get().then((response) => response.data);
};

//export const getBitcionAPI = async () => {
//const response = await instance.get();
//return (response.data);
//}
