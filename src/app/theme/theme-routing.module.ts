import { RouterModule, Routes } from '@angular/router';
import { ThemeListComponent } from './theme-list/theme-list.component';

const routes: Routes = [
  {
    path: 'theme',
    children: [
      {
        path: 'list',
        component: ThemeListComponent,
      },
    ],
  },
];
export const ThemeRoutingModule = RouterModule.forChild(routes);
