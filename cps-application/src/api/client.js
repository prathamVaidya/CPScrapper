import { create } from "apisauce";

const endpoint = "https://pratham-ubuntu.local:3000/api/";
var apiClient = create({
  baseURL: endpoint,
});

export default apiClient;
