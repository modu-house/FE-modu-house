import React, { useState } from 'react';
import styled from 'styled-components';
import MainPageTemplate from '../components/main/MainPageTemplate';
import Button from '../components/common/Button';
import theme from '../styles/theme';

function Write() {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFile = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleImageUpload = (event) => {
    encodeFile(event.target.files[0]);
  };

  return (
    <MainPageTemplate>
      <PageTitle>내 지역 게시글 쓰기</PageTitle>
      <Main>
        <Wrapper>
          <ImgPreview>
            {imageSrc && <img src={imageSrc} alt="preview-img" />}
          </ImgPreview>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="upload"
          />
          <TitleArea />
          <ContentArea />
          <Button>글쓰기</Button>
        </Wrapper>
      </Main>
    </MainPageTemplate>
  );
}

export default Write;

const PageTitle = styled.div`
  text-align: center;
  font-size: ${theme.fontSizes.title};
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 30px;
`;

const Main = styled.div`
  ${theme.common.flexCenterColumn}
  width: 100%;
  height: 100%;
  padding: 40px;
  border-radius: 15px;
  background-color: ${theme.colors.bg_paper2};
  ${theme.common.boxShadow};

  button {
    width: 100%;
    margin-top: 30px;
    font-size: 22px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const Wrapper = styled.div`
  ${theme.common.flexCenterColumn}
  width: 90%;

  .upload {
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 14px;
  }
`;

const ImgPreview = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  padding: 30px;

  img {
    width: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
  }
`;

const TitleArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 550px;
  min-height: 50px;
  white-space: pre-line;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 22px;
`;

const ContentArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 550px;
  min-height: 100px;
  white-space: pre-line;
  padding: 10px;
  font-size: 20px;
`;
