import React, { useState } from 'react';
import styled from 'styled-components';
import MainPageTemplate from '../components/main/MainPageTemplate';
import Button from '../components/common/Button';
import theme from '../styles/theme';
import { getSeoul } from '../utils/local';
import postAPI from '../api/posts';
import { useNavigate } from 'react-router';

function Write() {
  const [imageFormData, setImageFormData] = useState([]);
  const [imageSrc, setImageSrc] = useState([]);
  const [selected, setSelected] = useState('강남구');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const seoul = getSeoul();

  const encodeFile = (fileBlob) => {
    const reader = new FileReader();
    const formData = new FormData();
    reader.readAsDataURL(fileBlob[0]);
    formData.append('files', fileBlob[0]);
    setImageFormData(formData);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleImageUpload = (event) => {
    const files = event.currentTarget.files;
    if ([...files].length > 2) {
      alert('이미지는 최대 1개까지 업로드가 가능합니다.');
      return;
    } else {
      encodeFile(files);
    }
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    if (title && content) {
      await postAPI
        .writePost({
          title,
          content,
          image: imageFormData,
          local: selected,
        })
        .then((res) => {
          console.log(res);
          navigate('/');
        })
        .catch((error) => alert(error.response.data.msg));
    }
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
              value={selected}
              className="selectBox"
            >
              {seoul.map((item) => (
                <option value={item.name} key={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <hr />
            <p>
              지역: <b className="selected">{selected}</b>
            </p>
          </Select>
          <TitleArea value={title} onChange={handleTitle} />
          <ContentArea value={content} onChange={handleContent} />
          <Button onClick={handleSubmit}>글쓰기</Button>
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
