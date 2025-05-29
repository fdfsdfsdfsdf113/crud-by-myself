import axios from "axios";
const instance = axios.create({
  baseURL: 'http://localhost:2803',

});
export default instance;