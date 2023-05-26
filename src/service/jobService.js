import axios from "~/utils/httpRequest";

export const handlePostJob = async (jobInfo) => {
  try {
    const response = await axios.post("/job/create", jobInfo);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetJob = async () => {
  try {
    const response = await axios.get("/job/");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetJobById = async (id) => {
  try {
    const response = await axios.get(`/job/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetMyJob = async () => {
  try {
    const response = await axios.get(`/job/user`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetMyJobApplication = async () => {
  try {
    const response = await axios.get(`/job/application`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleAssignJob = async (jobId, freelancer) => {
  try {
    const response = await axios.post(`/job/changeStatus/${jobId}`, freelancer);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleFinalJob = async (jobId) => {
  try {
    const response = await axios.post(`/job/finalJob/${jobId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetJobAssign = async () => {
  try {
    const response = await axios.get(`/job/getJobAssign`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetJobAssign1 = async () => {
  try {
    const response = await axios.get(`/job/getJobAssign1`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetJobFinal = async () => {
  try {
    const response = await axios.get(`/job/getJobFinal`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetAssignJob = async (id) => {
  try {
    const response = await axios.get(`/assignJob/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handlePostAssignJob = async (contentAssign) => {
  try {
    const response = await axios.post(`/assignJob/`, contentAssign);
    return response;
  } catch (error) {
    console.log(error);
  }
};
