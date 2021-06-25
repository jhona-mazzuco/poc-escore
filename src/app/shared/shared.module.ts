import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { ApplicationSelectComponent } from './components/application-select/application-select.component';
import { applicationReducer } from './rx/reducers/application.reducer';
import { breadcrumbReducer } from './rx/reducers/breadcrumb.reducer';

const COMPONENTS = [ApplicationSelectComponent];

const REDUCERS = {
  breadcrumb: breadcrumbReducer,
  application: applicationReducer,
};

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    StoreModule.forRoot(REDUCERS, {}),
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
  ],
  exports: [...COMPONENTS, StoreModule],
})
export class SharedModule {}
