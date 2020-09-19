import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxGridModule, IgxCheckboxModule, IgxDatePickerModule } from 'igniteui-angular';
import { PagingComponent } from './paging/paging.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SortingComponent } from './sorting/sorting.component';
import { EditingComponent } from './editing/editing.component';

@NgModule({
  declarations: [
    AppComponent,
    PagingComponent,
    FilteringComponent,
    SortingComponent,
    EditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxCheckboxModule,
    FormsModule,
    IgxDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
