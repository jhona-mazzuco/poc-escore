import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectApplication } from '../../../../shared/rx/selectors/application.selectors';
import { AppState } from '../../../../shared/rx/states/app.state';
import { Menu } from '../../interfaces/menu.interface';
import { getSidebarMenu } from '../../utils/getSidebarMenu.util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: '0%', opacity: 0 }),
        animate('1s ease-out', style({ height: '100%', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: '100%', opacity: 1 }),
        animate('1s ease-in', style({ height: '0%', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  menu!: Menu[];

  constructor(private store: Store<AppState>, private router: Router) {
    store.select(selectApplication).subscribe({
      next: (app) => {
        const menu = getSidebarMenu(app.value);
        if (menu.length) {
          this.menu = menu;
        } else {
          this.router.navigateByUrl('/login');
        }
      },
    });
  }

  hasChild(node: Menu): boolean {
    return !!node?.children && node.children.length > 0;
  }
}
