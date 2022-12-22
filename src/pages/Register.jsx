import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainPageTemplate from '../components/main/MainPageTemplate';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import authAPI from '../api/auth';

function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const handleSubmit = () => {
    if (password === confirm) {
      authAPI
        .Signup({
          username: id,
          password,
        })
        .then((res) => {
          localStorage.setItem('id', res.headers.authorization);
          alert('회원가입 성공');
          navigate('/login');
        })
        .catch((error) => alert(error.response.data.msg));
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <MainPageTemplate>
      <FormBlock>
        <PageTitle>회원가입</PageTitle>
        <AuthForm>
          <div className="inputBox">
            <Input
              value={id}
              onChange={handleChangeId}
              type="text"
              placeholder="아이디"
            />
            <Input
              value={password}
              onChange={handleChangePassword}
              type="password"
              placeholder="패스워드"
            />
            <Input
              value={confirm}
              onChange={handleChangeConfirm}
              type="password"
              placeholder="패스워드 확인"
            />
            <Button onClick={handleSubmit} size="large" width="100%">
              회원가입
            </Button>
          </div>
          <Link to="/login" className="login">
            <span>로그인</span>
          </Link>
        </AuthForm>
      </FormBlock>
    </MainPageTemplate>
  );
}

export default Register;

const FormBlock = styled.div`
  ${({ theme }) => theme.common.absoluteCenter};
`;

const PageTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 30px;
`;

const AuthForm = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
  width: 100%;
  height: 100%;
  padding: 40px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bg_paper2};
  ${({ theme }) => theme.common.boxShadow};

  .inputBox {
    ${({ theme }) => theme.common.flexCenterColumn}

    input {
      margin-bottom: 18px;
    }

    Button {
      margin-top: 20px;
    }
  }

  .login {
    margin-top: 10px;
  }

  span {
    color: ${({ theme }) => theme.colors.text3};
  }
`;
