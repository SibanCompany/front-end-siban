import { boardApi } from '../api/api';

export const communityBoardServices = {
  getPosts: boardType => boardApi.get(`?boardType=${boardType}`),

  getPostById: (paramsId, boardType) =>
    boardApi.get(`/${paramsId}?boardType=${boardType}`),

  createPost: (boardType, name, email, password, title, content) =>
    boardApi.post(`?boardType=${boardType}`, {
      name,
      email,
      password,
      title,
      content,
    }),

  updateBoard: (id, email, password, title, content) =>
    boardApi.patch(`/boards/${id}`, {
      email,
      password,
      title,
      content,
    }),

  deletePost: (id, email, password) =>
    boardApi.delete(`/boards/${id}`, { email, password }),
};
