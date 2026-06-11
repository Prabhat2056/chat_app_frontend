import { axiosInstance } from ".";
import { url } from "../config";

export const getAllChats = async () => {
  try {
    const response = await axiosInstance.get(`${url}/api/chat/get-all-chats`);
    return response.data;
  } catch (error) {
    return error;
  }
};
