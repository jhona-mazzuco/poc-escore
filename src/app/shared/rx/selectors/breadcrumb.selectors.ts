import { createSelector } from '@ngrx/store';
import { BreadcrumbItem } from '../interfaces/breadcrumb-register-props.interface';
import { AppState } from '../states/app.state';

export const selectBreadcrumbs = createSelector(
  (state: AppState) => state.breadcrumb,
  (breadcrumb: BreadcrumbItem[]) => breadcrumb
);
