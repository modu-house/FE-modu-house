import React from 'react';
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

export default function Slider() {
  const settings = {
    infinite: true,
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
    /* 슬라이드 좌우 넘기기 커스텀 버튼 */
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <HouseList />
        <HouseList />
        <HouseList />
      </Slider>
    </SliderWrapper>
  );
}
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

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
`;

const PrevDiv = styled.div`
  left: -5%;

  .prev {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.text2};
  }
`;

const NextDiv = styled.div`
  /* right: 0; */

  .next {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.text2};
  }
`;

// const Container = styled.div`
//   overflow: hidden;
// `;
