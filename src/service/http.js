import axios from "axios";
export default axios.create({
    baseURL:"https://pusoenotes.naresh-chaudhary.com.np/api/",
    headers:{
        "Content-Type":"application/json"
    }
})