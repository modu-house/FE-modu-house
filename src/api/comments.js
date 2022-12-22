import { instance } from "./core/axios";

// 댓글 작성
export const writeComment = async (postId, comment) => {
  try {
    const data = await instance.post(`/api/boards/${postId}/comment`, comment);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 댓글 수정
export const editComment = async (postId, commentId, comment) => {
  try {
    const data = await instance.put(`/api/boards/${postId}/comment/${commentId}`, comment);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 댓글 삭제
export const deleteComment = async (postId, commentId) => {
  try {
    const data = await instance.delete(`/api/boards/${postId}/comment/${commentId}`);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const commentAPI = {
  writeComment,
  editComment,
  deleteComment,
}

export default commentAPI;