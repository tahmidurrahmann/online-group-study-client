import axios from "axios";

const instance = axios.create({
    baseURL : "https://online-group-study-server-blush.vercel.app",
    withCredentials : true,
})

const useAxios = () => {
    return instance;
};

export default useAxios;