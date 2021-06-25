import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationSelectComponent } from '../../../../shared/components/application-select/application-select.component';
import { applicationDialogConfig } from '../../../../shared/constants/application-dialog-config.constant';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  providers: [MatDialog],
})
export class ConfigurationComponent {
  constructor(private dialog: MatDialog) {}

  openApplicationSelect() {
    this.dialog.open(ApplicationSelectComponent, applicationDialogConfig);
  }
}
