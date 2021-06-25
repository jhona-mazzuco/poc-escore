import { createReducer, on } from '@ngrx/store';
import { register, resetAndRegister } from '../actions/breadcrumb.actions';
import { BreadcrumbItem } from '../interfaces/breadcrumb-register-props.interface';

export const initialState: ReadonlyArray<BreadcrumbItem> = [];

export const breadcrumbReducer = createReducer(
  initialState,
  on(register, (state, { data }): ReadonlyArray<BreadcrumbItem> => [...data]),
  on(resetAndRegister, (state, { breadcrumb }): ReadonlyArray<BreadcrumbItem> => [breadcrumb])
);
