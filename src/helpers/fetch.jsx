import axios from 'axios';
import { Alert } from '../components/Alert/Alert';

const baseUrlLogin = process.env.REACT_APP_LOGIN_API;
// const baseUrlHeroApi = `${process.env.REACT_APP_HERO_API_URL}/${process.env.REACT_APP_ACCESS_TOKEN}`;

export const getToken = async (email, password) => {
  try {
    const body = { email, password };
    const { data } = await axios.post(baseUrlLogin, body);
    const token = data.token;
    return token;
  } catch (error) {
    Alert('Error', 'Invalid email or password', 'error');
  }
};
