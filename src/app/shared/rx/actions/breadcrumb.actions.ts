import { createAction, props } from '@ngrx/store';
import { BreadcrumbItem } from '../interfaces/breadcrumb-register-props.interface';

export const register = createAction('[Breadcrumb] Register', props<{ data: BreadcrumbItem[] }>());

export const resetAndRegister = createAction('[Breadcrumb] Reset', props<{ breadcrumb: BreadcrumbItem }>());
