import axios from "~/utils/httpRequest";

export const handleRegister = async (registerForm) => {
  try {
    const response = await axios.post("/auth/register", registerForm);
    return response;
  } catch (error) {
    console.log("LOI SERVER");
  }
};

export const handleLogin = async (loginForm) => {
  try {
    const response = await axios.post("/auth/login", loginForm);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetAllUser = async (data) => {
  try {
    const response = await axios.get("/auth/6416040f54efb9edeb7dd7d1");

    return response;
  } catch (error) {
    console.log("LOI SERVER");
  }
};

export const handleGetUser = async () => {
  try {
    const response = await axios.get("/auth/");

    return response;
  } catch (error) {
    console.log("LOI SERVER");
  }
};
export const handleUpdateUser = async (formUpdate) => {
  try {
    const response = await axios.post("/auth/update", formUpdate);

    return response;
  } catch (error) {
    console.log("LOI SERVER");
  }
};
