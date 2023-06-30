import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "553575621f9b4bb287df9416477ec432",
  },
});
