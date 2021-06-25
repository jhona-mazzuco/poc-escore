import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationSelectComponent } from '../../../../shared/components/application-select/application-select.component';
import { applicationDialogConfig } from '../../../../shared/constants/application-dialog-config.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  show!: boolean;

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.dialog.open(ApplicationSelectComponent, applicationDialogConfig);
  }
}
