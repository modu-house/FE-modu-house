import { instance } from "./core/axios";

// TODO - alert 대체 컴포넌트 제작 필요

// 게시글 조회
const getPosts = async () => {
  try {
    const data = await instance.get("/api/boards");
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const getPostsByLocal = async (local) => {
  try {
    const data = await instance.get(`/api/localBoards?local=${local}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 상세 조회
const getPostDetail = async (postId) => {
  try {
    const data = await instance.get(`/api/boards/${postId}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 작성
const writePost = async (post) => {
  try {
    const data = await instance.post("/api/board", post);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 수정
const editPost = async (postId, post) => {
  try {
    const data = await instance.put(`/api/boards/${postId}`, post);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 삭제
const deletePost = async (postId) => {
  try {
    const data = await instance.delete(`/api/boards/${postId}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 좋아요
const postLike = async (postId) => {
  try {
    const data = await instance.post(`/api/boards/${postId}/boardLike`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 게시글 좋아요 취소
const cancelPostLike = async (postId) => {
  try {
    const data = await instance.delete(`/api/boards/${postId}/boardLike`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const postAPI = {
  getPosts,
  getPostsByLocal,
  getPostDetail,
  writePost,
  editPost,
  deletePost,
  postLike,
  cancelPostLike,
}

export default postAPI;