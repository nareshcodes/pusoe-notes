import axios from "axios";
export default axios.create({
    baseURL:"http://192.168.0.7:8125/api/",
    headers:{
        "Content-Type":"application/json"
    }
})