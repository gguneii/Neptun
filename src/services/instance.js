import axios from "axios";
import ConfigObj from "../config/confis";
const axiosInstance = axios.create({
    baseURL : ConfigObj.baseUrl
})