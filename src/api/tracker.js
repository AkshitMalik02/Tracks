import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const instance = axios.create({
  baseURL: 'https://2551-2401-4900-1c23-5f98-6dd5-40a4-99ca-fce0.ngrok-free.app',
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
