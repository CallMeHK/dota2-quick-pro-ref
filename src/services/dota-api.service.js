import { request } from "./request.service";

const dotaApiUrl = "https://api.opendota.com/api";

const getAllProPlayers = async () => {
  const response = await request(dotaApiUrl + "/proPlayers");
  return response;
};

export { getAllProPlayers };
