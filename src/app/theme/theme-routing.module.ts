import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { MainComponent } from './main/main.component';
import { ThemeResolver } from './resolvers/theme.resolver';

const routes: Routes = [
  {
    path: 'theme',
    children: [
      {
        path: 'list',
        component: MainComponent,
        data: {
          title: 'Blog',
        },
      },
      {
        path: 'new',
        component: NewThemeComponent,
        data: {
          title: 'New Theme',
        },
      },
      {
        path: 'detail/:id',
        resolve: {
          theme: ThemeResolver,
        },
        component: ThemeDetailsComponent,
        data: {
          title: 'Details',
        },
      },
    ],
  },
];
export const ThemeRoutingModule = RouterModule.forChild(routes);
