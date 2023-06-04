import { communityBoardService } from '../api/api';

export const communityBoardApi = {
  getNotice: () => communityBoardService.get('/boards'),
};
