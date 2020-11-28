import axios from "axios";

const instance = axios.create({
    baseURL: "https://burgerbuilder-5c813.firebaseio.com/"
})

export default instance;