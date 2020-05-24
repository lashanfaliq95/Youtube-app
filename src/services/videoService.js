import axios from 'axios';

const SERVICE_URL="http://192.168.8.102:5000/"

const getMostPopularVideos=(searchText)=>{
 return axios.get(SERVICE_URL+"search/word/"+searchText);
}

const getMostRecentVideos=(searchText)=>{
    return axios.get(SERVICE_URL+"search/channel/"+searchText);
}

const getAllVideos=()=>{

}

export {getMostPopularVideos, getMostRecentVideos, getAllVideos};