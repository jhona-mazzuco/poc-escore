import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { applications } from '../../constants/applications.constant';
import { Application } from '../../interfaces/application.interface';
import { register } from '../../rx/actions/application.actions';
import { AppState } from '../../rx/states/app.state';

@Component({
  selector: 'app-application-select',
  templateUrl: './application-select.component.html',
  styleUrls: ['./application-select.component.scss'],
})
export class ApplicationSelectComponent {
  applications: Application[] = applications;

  constructor(private store: Store<AppState>, private dialogRef: MatDialogRef<any>, private router: Router) {}

  applicationSelected(application: Application) {
    this.store.dispatch(register({ application }));
    this.router.navigateByUrl('/');
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
