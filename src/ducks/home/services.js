import axios from 'axios';
import { endpoints } from '../../constants/endpoints';

export const getHomeContent = async () => {
  try {
    const response = await axios.get(endpoints.HOME.GET);
    return response.data;
  } catch (error) {
    return error;
  }
};
