import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FriendtableComponent } from './friendtable/friendtable.component';
import { CommonfriendtableComponent } from './commonfriendtable/commonfriendtable.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UpdatetableComponent } from './updatetable/updatetable.component';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FriendtableComponent,
    CommonfriendtableComponent,
    FooterComponent,
    UpdatetableComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
