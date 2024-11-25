import instance from "./index.js";
export const userLogin = async (formData) => {
  return await instance.post(formData);
};
export const userRegister = async (data, url) => {
  return await instance.post(url, data);
};

