import { instance } from "./core/axios";

// 로그인
export const postLogin = async (auth) => {
  try {
    const data = await instance.post("/api/auth/login", auth);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 회원가입
export const postSignup = async (auth) => {
  try {
    const data = await instance.post("/api/auth/signup", auth);
    alert("회원가입 성공");
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};
