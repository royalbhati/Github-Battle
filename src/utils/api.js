// import axios from "axios";
const axios=require("../../node_modules/axios");

export default function fetchPopular(language){
        const encodedURL ="https://api.github.com/search/repositories?q=stars:>1+language:"
        +language+"&sort=stars&order=desc";
        return axios.get(encodedURL)
        .then(function(resp){
            return resp.data.items;
})

    }


