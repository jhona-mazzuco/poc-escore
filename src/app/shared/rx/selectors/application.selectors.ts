import { createSelector } from '@ngrx/store';
import { Application } from '../../interfaces/application.interface';
import { AppState } from '../states/app.state';

export const selectApplication = createSelector(
  (state: AppState) => state.application,
  (application: Application) => application
);
