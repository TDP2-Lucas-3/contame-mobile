import axios from 'axios';
import token from '../services/token';

const usePost = () => {
  const headers = {
    Authorization: `Bearer ${token.token}`,
  };
  return async (url, data) => axios.post(url, data, {headers});
};

export default usePost;
