import axios from 'axios';

const SERVICE_URL = 'http://192.168.8.102:5000/';

const getMostPopularVideos = (channelId) => {
  return axios.get(SERVICE_URL + 'channel/videos/popular/' + channelId);
};

const getMostRecentVideos = (channelId) => {
  return axios.get(SERVICE_URL + 'channel/videos/recent/' + channelId);
};

const getAllVideos = (channelId) => {
  return axios.get(SERVICE_URL + 'channel/videos/all/' + channelId);
};

const analyzeVideo = (videoId) => {
  return axios.get(SERVICE_URL + 'analyse/' + videoId);
};

const getFrequency = (videoId) => {
  return axios.get(SERVICE_URL + 'frequency/' + videoId);
};

const getQuestions = (videoId) => {
  return axios.get(SERVICE_URL + 'questions/' + videoId);
};

export {
  getMostPopularVideos,
  getMostRecentVideos,
  getAllVideos,
  analyzeVideo,
  getFrequency,
  getQuestions,
};
