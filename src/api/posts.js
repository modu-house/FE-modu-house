import { instance } from "./core/axios";

// TODO - alert 대체 컴포넌트 제작 필요

// 게시글 조회
export const getPosts = async () => {
  try {
    const data = await instance.get("/api/boards");
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 상세 조회
export const getPostDetail = async (postId) => {
  try {
    const data = await instance.get(`/api/boards/${postId}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 작성
export const writePost = async (post) => {
  try {
    const data = await instance.post("/api/boards", post);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 수정
export const editPost = async (postId, post) => {
  try {
    const data = await instance.put(`/api/boards/${postId}`, post);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 삭제
export const deletePost = async (postId) => {
  try {
    const data = await instance.delete(`/api/boards/${postId}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 좋아요
export const postLike = async (postId) => {
  try {
    const data = await instance.post(`/api/boards/${postId}/boardLike`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 좋아요 취소
export const cancelPostLike = async (postId) => {
  try {
    const data = await instance.delete(`/api/boards/${postId}/boardLike`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
