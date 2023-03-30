import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/person";

/*class PeopleService {
  static get = async () => {
    return await axios.get(API_URL);
  };

  static getById = async (id) => {
    return await axios.get(API_URL + "/" + id);
  };

  static add = async (data) => {
    return await axios.post(API_URL, data);
  };

  static deleteById = async (id) => {
    return await axios.delete(API_URL + "/" + id);
  };

}

export default PeopleService;*/

export const get = async () => {
  return await axios.get(API_URL);
};

export const getById = async (id) => {
  return await axios.get(API_URL + "/" + id);
};

export const add = async (data) => {
  return await axios.post(API_URL, data);
};

export const deleteById = async (id) => {
  return await axios.delete(API_URL + "/" + id);
};
