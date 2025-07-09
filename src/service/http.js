import axios from "axios";
export default axios.create({
    baseURL:"http://192.168.0.2:8125/api/",
    headers:{
        "Content-Type":"application/json"
    }
})