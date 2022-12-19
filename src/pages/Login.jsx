import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/common/Input';

function Login() {
  return (
    <BgPaper>
      <FormBlock>
        <PageTitle>로그인</PageTitle>
        <AuthForm>
          <div className="inputBox">
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="패스워드" />
          </div>
          <button type="button">로그인</button>
          <Link to="/register" className="register">
            <span>회원가입</span>
          </Link>
        </AuthForm>
      </FormBlock>
    </BgPaper>
  );
}

export default Login;

const BgPaper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg_paper2};
`;

const FormBlock = styled.div`
  ${({ theme }) => theme.common.absoluteCenter};
`;

const PageTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const AuthForm = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
  width: 600px;
  height: 400px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bg_paper2};
  ${({ theme }) => theme.common.boxShadow};

  .inputBox {
    ${({ theme }) => theme.common.flexCenterColumn}

    input {
      margin-bottom: 10px;
    }
  }

  .register {
    margin-top: 10px;
  }

  span {
    color: ${({ theme }) => theme.colors.text3};
  }
`;
