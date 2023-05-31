import axios, {AxiosInstance} from "axios";

const serverURL = process.env.VUE_APP_BASE_URL
const instance: AxiosInstance = axios.create({
    baseURL:serverURL,
    timeout:30_000
});

export default instance;