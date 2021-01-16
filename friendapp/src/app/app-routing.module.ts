import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LinkaccountComponent} from './linkaccount/linkaccount.component'
import {PostupdatesComponent } from './postupdates/postupdates.component';
import { CommonfriendtableComponent } from './commonfriendtable/commonfriendtable.component';
import { FriendtableComponent } from './friendtable/friendtable.component';
import { UpdatetableComponent } from './updatetable/updatetable.component';


const routes: Routes = [
  { path: 'friendlist', component: FriendtableComponent },
  { path: '', component: LinkaccountComponent },
  { path: 'updates', component: UpdatetableComponent},
  { path: 'postupdates', component: PostupdatesComponent },
  { path: 'commonfriend', component: CommonfriendtableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[FriendtableComponent,LinkaccountComponent,UpdatetableComponent,PostupdatesComponent]
