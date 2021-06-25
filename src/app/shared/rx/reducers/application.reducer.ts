import { createReducer, on } from '@ngrx/store';
import { applicationLSKey } from '../../constants/application-key.constant';
import { Application } from '../../interfaces/application.interface';
import { getSavedApplication } from '../../utils/get-saved-application.util';
import { clear, register } from '../actions/application.actions';

export const initialState: Application = getSavedApplication() ?? ({} as Application);

export const applicationReducer = createReducer(
  initialState,
  on(register, (state, { application }): Application => {
    localStorage.setItem(applicationLSKey, application.value);
    return application;
  }),
  on(clear, (): Application => initialState)
);
