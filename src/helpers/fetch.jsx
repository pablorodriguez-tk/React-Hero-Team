import axios from 'axios';
import { Alert } from '../components/Alert/Alert';

const baseUrlLogin = process.env.REACT_APP_LOGIN_API;
const baseUrlHeroApi = `${process.env.REACT_APP_HERO_API_URL}/${process.env.REACT_APP_ACCESS_TOKEN}`;

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const body = { email, password };
    const resp = await axios.post(baseUrlLogin, body);
    return resp;
  } catch (error) {
    Alert('Error', 'Invalid email or password', 'error');
  }
};

export const searchHero = async (heroName) => {
  try {
    const { data } = await axios.get(`${baseUrlHeroApi}/search/${heroName}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// name, imagen,powerstats,
// ver detalle, eliminar
export const getHeroById = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrlHeroApi}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
