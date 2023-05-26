import axios from "~/utils/httpRequest";

export const handleCreateEvaluate = async (evaluateForm) => {
  try {
    const response = await axios.post("/evaluate", evaluateForm);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetMyEvaluate = async () => {
  try {
    const response = await axios.get("/evaluate");
    return response;
  } catch (error) {
    console.log(error);
  }
};
