import { useParams } from "react-router-dom";

const PROJECT_ID = "6g5cmsw85lyy";

export const getHeaderWithProjectId = () => {
  return {
    headers: { projectId: PROJECT_ID },
  };
};
export const getHeaderWithProjectIDAndBody = () => {
  return {
    headers: { "Content-Type": "application/json", projectId: PROJECT_ID },
  };
};

export const getToken = () => {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const getUserInfo = () => {
  const userName = JSON.parse(sessionStorage.getItem("userInfo"));
  // const {userName}=useParams();
  return userName;
};
