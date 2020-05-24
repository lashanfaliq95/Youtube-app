import axios from 'axios';

const SERVICE_URL="http://192.168.8.102:5000/"

const searchByTerm=(searchText)=>{
 return axios.get(SERVICE_URL+"search/word/"+searchText);
}

const searchByChannel=(searchText)=>{
    return axios.get(SERVICE_URL+"search/channel/"+searchText);
}

export {searchByTerm, searchByChannel};