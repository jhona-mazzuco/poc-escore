import { cvzMenu } from '../constants/cvz-menu.constant';
import { escoreMenu } from '../constants/escore-menu.constant';

export const getSidebarMenu = (app: string) => {
  switch (app) {
    case 'HUD_ESCORE':
      return escoreMenu;
    case 'HUD_CVZ':
      return cvzMenu;
    default:
      return [];
  }
};
