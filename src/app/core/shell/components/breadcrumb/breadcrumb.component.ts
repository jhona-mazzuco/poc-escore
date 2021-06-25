import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreadcrumbItem } from '../../../../shared/rx/interfaces/breadcrumb-register-props.interface';
import { selectBreadcrumbs } from '../../../../shared/rx/selectors/breadcrumb.selectors';
import { AppState } from '../../../../shared/rx/states/app.state';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs!: BreadcrumbItem[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectBreadcrumbs).subscribe({
      next: (value) => (this.breadcrumbs = value),
    });
  }

  isLast(index: number) {
    return this.breadcrumbs.length - 1 === index;
  }
}
