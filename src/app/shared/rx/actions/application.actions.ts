import { createAction, props } from '@ngrx/store';
import { Application } from '../../interfaces/application.interface';

export const register = createAction('[Application] Register', props<{ application: Application }>());

export const clear = createAction('[Application] Reset');
