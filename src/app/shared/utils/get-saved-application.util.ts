import { applicationLSKey } from '../constants/application-key.constant';
import { applications } from '../constants/applications.constant';

export const getSavedApplication = () =>
  applications.find((app) => app.value === localStorage.getItem(applicationLSKey));
