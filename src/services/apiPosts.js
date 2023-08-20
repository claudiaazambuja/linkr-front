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

export default function getPosts(token) {
  const promise = axios.get(`${API_URL}/timeline`, ConfigToken(token));
  return promise;
}

export async function getUserPosts(username, token) {
  const promise = axios.get(`${API_URL}/timeline/user/${username}`, ConfigToken(token));
  return promise;
}

export const deletePost = async (postId, token) => {
  try {
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
