import { rest } from 'msw';
import img from '../assets/modu-house.svg';

const boards = [
  {
    id: 1,
    title: '여기 방 추천합니다.',
    local: '관악구',
    content:
      '여기 방 따뜻합니다.\n 제가 옆집이 시끄러워서 벽을 주먹으로 몇 대 쳤더니 보일러가 필요없어졌네요.',
    username: '관악구불주먹에이스',
    createdAt: '2020-04-11T11:12:30.686',
    modifiedAt: '2020-04-11T11:12:30.686',
    image: { img },
    boardLike: 2,
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
    image: { img },
    boardLike: 2,
  },
];

// const comments = [];

export const userHandlers = [
  rest.post('/api/user/signup', (req, res, ctx) => {
    return res(
      ctx.json({
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }),
    );
  }),
  rest.post('/api/user/login', (req, res, ctx) => {
    return res(
      ctx.json({
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }),
    );
  }),
];

export const boardsHandlers = [
  // 게시글 조회
  rest.get('/api/boards', (req, res, ctx) => {
    const local = req.url.searchParams.get('local')
    console.log(local);
    // exist local query string
    if(local) return res(ctx.status(200), ctx.json(boards.filter((item) => item.local === local)));
    else return res(ctx.status(200), ctx.json(boards));
  }),

  // 게시글 상세 조회
  rest.get('/api/boards/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.status(200), ctx.json(boards.find((item) => item.id === id)));
  }),

  // 게시글 추가
  rest.post('/api/boards', (req, res, ctx) => {
    console.log(req.body);
    boards.push(req.body);
    return res(ctx.status(201));
  }),

  // 게시글 삭제
  rest.delete('/api/boards/:id', (req, res, ctx) => {
    boards = boards.filter((item) => item.id === id);
    return res(ctx.status(200));
  }),
];

// TODO - add comment mock
// export const commentsHandlers = [
//   // 댓글 조회
//   rest.get('/api/boards/:id', (req, res, ctx) => {
//     const { id } = req.params;
//     return res(ctx.status(200), ctx.json(boards.filter((item) => item.boardId === id)));
//   }),

//   // 댓글 추가
//   rest.post('/api/boards/:boardId/comment', (req, res, ctx) => {
//     const { boardId } = req.params;
//     boards.push({ boardId, ...req.body});
//     return res(ctx.status(201));
//   }),

//   // 댓글 삭제
//   rest.delete('/api/boards/:id', (req, res, ctx) => {
//     boards = boards.filter((item) => item.id === id);
//     return res(ctx.status(200));
//   }),
// ]

// export const handlers = [...userHandlers, ...boardsHandlers, ...commentsHandlers];
export const handlers = [...userHandlers, ...boardsHandlers];
