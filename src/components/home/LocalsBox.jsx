import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLocals } from '../../utils/local.js';
import Button from '../common/Button';
import theme from '../../styles/theme.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

const LocalsBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const locals = getLocals();
  const [selected, setSelected] = useState();
  const [showList, setShowList] = useState(false);

  const handleShow = () => {
    setShowList(!showList);
  };

  const handleSelect = (e) => {
    const name = e.target.value;
    setSelected(name);
    setShowList(!showList);
    name === '전체' ? setSearchParams() : setSearchParams({ local: name });
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSelected(currentParams.local ?? '전체');
  }, [searchParams]);

  return (
    <LocalBox>
      <TitleBox>
        <Button size="large" onClick={handleShow} width="45px">
          <FontAwesomeIcon icon={faEllipsis} size="2xl" />
        </Button>
        <Title>{selected} 게시글 보기</Title>
      </TitleBox>
      {showList && (
        <ListBox>
          {locals.map((local) => {
            if (local.name === selected) {
              return (
                <Button
                  key={local.index}
                  value={local.name}
                  onClick={handleSelect}
                >
                  {local.name}
                </Button>
              );
            } else {
              return (
                <Button
                  className={selected === local.name ? 'selected' : ''}
                  color={theme.colors.text1}
                  bgcolor={theme.colors.bg_paper2}
                  key={local.index}
                  value={local.name}
                  onClick={handleSelect}
                >
                  {local.name}
                </Button>
              );
            }
          })}
        </ListBox>
      )}
    </LocalBox>
  );
};

const LocalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleBox = styled.div`
  ${theme.common.flexCenter}
  position: relative;
  width: 80%;
  margin-bottom: 10px;

  Button {
    position: absolute;
    left: 0;
  }
`;

const Title = styled.h1`
  font-size: ${theme.fontSizes.title};
  font-weight: 600;
`;

const ListBox = styled.div`
  ${theme.common.flexCenter}
  ${theme.common.boxShadow}
  position: absolute;
  top: 100px;
  z-index: 900;
  border-radius: 10px;
  padding: 20px;
  flex-wrap: wrap;
  width: 80%;
  background-color: ${theme.colors.bg_paper1};

  Button {
    margin-bottom: 10px;
  }
`;

export default LocalsBox;
