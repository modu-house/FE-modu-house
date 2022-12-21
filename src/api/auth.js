import { instance } from "./core/axios";

// 로그인
const Login = async (auth) => {
  try {
    const data = await instance.post("/api/auth/login", auth);
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

// 회원가입
const Signup = async (auth) => {
  try {
    const data = await instance.post("/api/auth/signup", auth);
    alert("회원가입 성공");
    return data;
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const authAPI = {
  Login,
  Signup,
}

export default authAPI;