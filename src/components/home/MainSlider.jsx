import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import HouseList from './HouseList';
import { useSearchParams } from 'react-router-dom';
import postAPI from '../../api/posts';

function MainSlider() {
  const [searchParams] = useSearchParams();
  const [local, setLocal] = useState('전체');
  const [totalPosts, setTotalPosts] = useState([]);
  const [dividedPosts, setDividedPosts] = useState([]);
  const postPerPage = 20;

  const getPosts = useCallback(async (local) => {
    console.log(local);
    if (local === '전체') {
      await postAPI.getPosts().then((res) => {
        setTotalPosts(res.data);
      });
    } else {
      console.log('왜 호출 안함');
      await postAPI.getPostsByLocal(local).then((res) => {
        setTotalPosts(res.data);
      });
    }
  }, []);

  const chunk = (data = [], size = 1) => {
    const arr = [];
    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }
    return arr;
  };

  // 무한 Effect, 데이터 안나눠짐
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setLocal(currentParams.local ?? '전체');
    getPosts(local);
  }, [searchParams, local]);

  useEffect(() => {
    if (totalPosts.length > postPerPage) {
      setDividedPosts(chunk(totalPosts, postPerPage));
    }
  }, [totalPosts]);

  return (
    <StSlider {...settings}>
      {dividedPosts ? (
        dividedPosts.map((posts, idx) => {
          return <HouseList key={idx} posts={posts} />;
        })
      ) : (
        <HouseList posts={totalPosts} />
      )}
    </StSlider>
  );
}

const StSlider = styled(Slider)`
  width: 100%;
  height: 85vh;
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
  }
  // slick 기본 화살표 안 보이게 하기
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-disabled {
    .prev {
      color: ${({ theme }) => theme.colors.text2};
    }
    .next {
      color: ${({ theme }) => theme.colors.text2};
    }
  }
`;

const PrevDiv = styled.div`
  transform: translate(10px, -50px);
  .prev {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

const NextDiv = styled.div`
  transform: translate(-70px, -50px);
  .next {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

const settings = {
  infinite: false,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true, // 중앙정렬
  centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  prevArrow: (
    <PrevDiv>
      <FontAwesomeIcon icon={faChevronLeft} className="prev" />
    </PrevDiv>
  ),
  nextArrow: (
    <NextDiv>
      <FontAwesomeIcon icon={faChevronRight} className="next" />
    </NextDiv>
  ),
};

export default MainSlider;
