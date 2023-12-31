import axios, { AxiosError } from "axios";
import ConfigToken from "./configToken";
import IdentifyHashtags from "../utils/identifyHashtags.function";

const API_URL = process.env.REACT_APP_API_URL;

export const createPost = async (postData, token) => {
  try {
    const hashtagsList = IdentifyHashtags(postData.description);
    const response = await axios.post(`${API_URL}/timeline`, { ...postData, hashtagsList }, ConfigToken(token));
    return response.data;
  } catch (error) {
    throw new AxiosError(error.message);
  }
};

export default function getPosts(token, limit) {
  const config = {
    headers: { Authorization: `Bearer ${token}`, Limit: `${limit}` }
  };
  const promise = axios.get(`${API_URL}/timeline`, config);
  return promise;
}

export const deletePost = async (postId, token) => {
  try {
    console.log(token)
    await axios.delete(`${API_URL}/timeline/${postId}`, ConfigToken(token));
    return;
  } catch (error) {
    throw new AxiosError(error.message);
  }
};

export function updatePost(token, id, data) {
  const promise = axios.patch(`${API_URL}/timeline/posts/${id}`, data, ConfigToken(token));
  return promise;
}
