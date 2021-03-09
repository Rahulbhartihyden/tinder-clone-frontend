import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-rahul.herokuapp.com/",
});

export default instance;
