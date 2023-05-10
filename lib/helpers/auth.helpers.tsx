import axios from "axios";
import getConfig from "next/config";
import { cookies } from 'next/headers';

const { publicRuntimeConfig } = getConfig()
const BASE_URL = publicRuntimeConfig.BASE_URL

const instance = axios.create({
    baseURL: BASE_URL,
})

instance.interceptors.request.use(async (config) => {
    const cookieStore = cookies()
    const token = cookieStore.get(`token`)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}
);

export default instance