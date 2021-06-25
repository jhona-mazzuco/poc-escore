import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./core/shell/shell.module').then((m) => m.ShellModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
