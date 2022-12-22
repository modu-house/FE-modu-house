import React, { useState } from 'react';
import styled from 'styled-components';
import MainPageTemplate from '../components/main/MainPageTemplate';
import Button from '../components/common/Button';
import theme from '../styles/theme';

function Write() {
  //이미지 프리뷰
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

  // 지역 선택박스
  const selectList = [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중량구',
  ];
  const [Selected, setSelected] = useState('');

  const handleSelect = (e) => {
    setSelected(e.target.value);
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
            name=""
            multiple
          />
          <Select>
            <select
              onChange={handleSelect}
              value={Selected}
              className="selectBox"
            >
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <hr />
            <p>
              Selected: <b className="selected">{Selected}</b>
            </p>
          </Select>
          <TitleArea />
          <ContentArea />
          <Button>글쓰기</Button>
        </Wrapper>
      </Main>
    </MainPageTemplate>
  );
}

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

const Select = styled.div`
  width: 100%;
  margin-bottom: 10px;

  .selectBox {
    width: 100%;
    height: 30px;
    font-size: 18px;
  }

  .selected {
    font-size: 20px;
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

export default Write;
