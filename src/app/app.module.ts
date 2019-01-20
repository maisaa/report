import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';


import { HttpClientModule } from '@angular/common/http';
import { TableService } from './table/table.service';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    HttpClientModule,
    UiModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
