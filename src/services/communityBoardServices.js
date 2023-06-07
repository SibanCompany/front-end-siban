import { boardApi } from '../api/api';

export const communityBoardServices = {
  getPosts: boardType => boardApi.get('', { params: { boardType } }),

  getPostById: (paramsId, boardType) =>
    boardApi.get(`/${paramsId}`, { params: { boardType } }),

  createPost: (boardType, name, email, password, title, content) =>
    boardApi.post('', { boardType, name, email, password, title, content }),

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
