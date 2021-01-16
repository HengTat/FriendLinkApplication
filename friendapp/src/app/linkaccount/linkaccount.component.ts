import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { DataService } from '../data.service';

@Component({
  selector: 'app-linkaccount',
  templateUrl: './linkaccount.component.html',
  styleUrls: ['./linkaccount.component.css']
})
export class LinkaccountComponent implements OnInit {
  friendemail: string="";
  myemail: string ="";
  constructor(private dataService: DataService, private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  linkaccount(linkaccountform){
    const payload={email: this.myemail, friendemail:this.friendemail};
    this.dataService.linkaccount(payload).subscribe(data=>{
      console.log(data);
      this.notificationService.success('Success', 'Account has been linked', {
        position: ['', 'center'],
        timeOut: 1400,
        animate: 'fade',
      });
      });
    this.myemail="";
    this.friendemail="";
    linkaccountform.resetForm();
  }

}
