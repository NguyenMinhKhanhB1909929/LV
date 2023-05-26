import axios from "~/utils/httpRequest";

export const handleCreateOffer = async (offerForm) => {
  try {
    const response = await axios.post("/offer", offerForm);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetMyOffer = async () => {
  try {
    const response = await axios.get("/offer");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetOfferByJob = async (jobId) => {
  try {
    const response = await axios.get(`/offer/${jobId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
