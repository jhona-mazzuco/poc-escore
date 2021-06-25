import { Application } from '../../interfaces/application.interface';
import { BreadcrumbItem } from '../interfaces/breadcrumb-register-props.interface';

export interface AppState {
  breadcrumb: BreadcrumbItem[];
  application: Application;
}
