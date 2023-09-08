const PROJECT_ID = "6g5cmsw85lyy";

export const getHeaderWithProjectId = () => {
  return {
    headers: { projectId: PROJECT_ID },
  };
};
