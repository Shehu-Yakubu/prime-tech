import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagingComponent } from './paging/paging.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SortingComponent } from './sorting/sorting.component';
import { EditingComponent } from './editing/editing.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';

const routes: Routes = [
  { path: 'paging', component: PagingComponent, data: { text: 'Paging' } },
  { path: 'filtering', component: FilteringComponent, data: { text: 'Filtering' } },
  { path: 'sorting', component: SortingComponent, data: { text: 'Sorting' } },
  { path: 'editing', component: EditingComponent, data: { text: 'Editing' } },
  { path: '', redirectTo: 'paging', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
