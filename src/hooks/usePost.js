import axios from 'axios';

const usePost = () => {
  return async (url, data) => axios.post(url, data);
};

export default usePost;
