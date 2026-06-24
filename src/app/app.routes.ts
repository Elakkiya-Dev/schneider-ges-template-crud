import { Routes } from '@angular/router';
import { TemplateList } from './components/template-list/template-list';

export const routes: Routes = [
  { path: '', component: TemplateList, title: 'GES Templates' },
  { path: '**', redirectTo: '' },
];
