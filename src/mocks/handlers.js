import { rest } from 'msw';
import img1 from '../assets/test1.png';
import img2 from '../assets/test2.png';

let users = [
  { id: 'test', password: 'test', usename: '양정동마자용'},
  { id: 'synun', password: 'synun', usename: '미사동똑띠'}
];

let boards = [
  {
    id: 1,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 2,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 3,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 4,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 5,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 6,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 7,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 8,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 9,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 10,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 11,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 12,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 13,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 14,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 15,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 16,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 17,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 18,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 19,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 1,
        postId: 1,
        username: '관악구불주먹에이스',
        content: '댓글 안달면 불주먹 날라감',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 2,
        postId: 1,
        username: '관악구길거리파이터',
        content: '광명시장 길바닥 다 내 손바닥 안임',
        createdAt: '2020-04-11T11:12:30.686',
      },
    ]
  },
  {
    id: 20,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 21,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
  {
    id: 22,
    title: '강남의 중심이지만 조용한 지역 추천해요',
    local: '강남구',
    content:
      '강남역이랑 가까우면서 치안도 좋고 조용해요.\n마치 신화속에 나오는 전설의 동물같은 지역입니다.',
    username: '유니콘',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: [img1, img2],
    boardLike: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        username: '노원구러닝메이트',
        content: '근처 공원에서 아침 바람 맞으며 러닝하기',
        createdAt: '2020-04-11T11:12:30.686',
      },
      {
        id: 4,
        postId: 2,
        username: '서대문구기리보이',
        content: '여기 오면 내가 랩해드림',
        createdAt: '2020-04-11T11:12:30.686',
      }
    ]
  },
];

let comments = [
  {
    id: 1,
    postId: 1,
    username: '관악구불주먹에이스',
    content: '댓글 안달면 불주먹 날라감',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    id: 2,
    postId: 1,
    username: '관악구길거리파이터',
    content: '광명시장 길바닥 다 내 손바닥 안임',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    id: 3,
    postId: 2,
    username: '노원구러닝메이트',
    content: '근처 공원에서 아침 바람 맞으며 러닝하기',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    id: 4,
    postId: 2,
    username: '서대문구기리보이',
    content: '여기 오면 내가 랩해드림',
    createdAt: '2020-04-11T11:12:30.686',
  }
];

export const userHandlers = [
  // 회원가입
  rest.post('/api/user/signup', (req, res, ctx) => {
    users.push(req.body);
    return res(ctx.status(201));
  }),

  // 로그인
  rest.post('/api/user/login', (req, res, ctx) => {
    const { id, password } = req.body;
    const exist = users.find((item) => id===item.id && password===item.password);
    if(exist) {
      return res(
        ctx.status(200),
        ctx.json({
          jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaW4xMjM0IiwiZXhwIjoxNjY5ODcwNDUyLCJpYXQiOjE2Njk4NjY4NTJ9.mm8wgaV8M70hidhPX4Ut6UONZGaxjA1KnOJT1mO59Xc',
        }),
      );
    } else {
      return res(ctx.status(404));
    }
  }),
];

export const boardsHandlers = [
  // 게시글 조회
  rest.get('/api/boards', (req, res, ctx) => {
    const local = req.url.searchParams.get('local')
    // exist local query string
    if(local) return res(ctx.status(200), ctx.json(boards.filter((item) => item.local === local)));
    else return res(ctx.status(200), ctx.json(boards));
  }),

  // 게시글 상세 조회
  rest.get('/api/boards/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(boards.find((item) => item.id === Number(id))));
  }),

  // 게시글 추가
  rest.post('/api/boards', (req, res, ctx) => {
    boards.push(req.body);
    return res(ctx.status(201));
  }),

  // 게시글 수정
  rest.put('/api/boards/:id', (req, res, ctx) => {
    const { id } = req.params;
    boards = boards.map((item) => {
      if(item.id === id){
        return req.body;
      } else {
        return item;
      }
    });
    return res(ctx.status(201));
  }),

  // 게시글 삭제
  rest.delete('/api/boards/:id', (req, res, ctx) => {
    const { id } = req.params;
    boards = boards.filter((item) => item.id === id);
    return res(ctx.status(200));
  }),

  // 게시글 좋아요
  rest.post('/api/boards/:id/boardLike', (req, res, ctx) => {
    const { id } = req.params;
    boards = boards.map((item) => {
      if(item.id === id){
        return {...item, boardLike: item.boardLike + 1};
      } else {
        return item;
      }
    });
    return res(ctx.status(200));
  }),

  // 게시글 좋아요 취소
  rest.delete('/api/boards/:id/boardLike', (req, res, ctx) => {
    const { id } = req.params;
    boards = boards.map((item) => {
      if(item.id === id){
        return {...item, boardLike: item.boardLike - 1};
      } else {
        return item;
      }
    });
    return res(ctx.status(200));
  })
];

// TODO - add comment mock
export const commentsHandlers = [
  // 댓글 추가
  rest.post('/api/boards/:postId/comment', (req, res, ctx) => {
    const { postId } = req.params;
    comments.push({
      postId,
      id: comments.length + 1,
      ...req.body
    });
    return res(ctx.status(200));
  }),

  // 댓글 수정
  rest.put('/api/boards/:postId/comment/:commentId', (req, res, ctx) => {
    const { postId, commentId } = req.params;
    comments = comments.map((item) => {
      if(item.id === commentId){
        return {...item, ...req.body};
      } else {
        return item;
      }
    });
    return res(ctx.status(200));
  }),


  // 댓글 삭제
  rest.delete('/api/boards/${postId}/comment/${commentId}', (req, res, ctx) => {
    const { postId, commentId } = req.params;
    comments = comments.filter((item) => item.id === commentId);
    return res(ctx.status(200));
  }),
]

// export const handlers = [...userHandlers, ...boardsHandlers, ...commentsHandlers];
export const handlers = [...userHandlers, ...boardsHandlers];
