import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { DataService } from '../data.service';
import { updates } from '../user.model';

@Component({
  selector: 'app-postupdates',
  templateUrl: './postupdates.component.html',
  styleUrls: ['./postupdates.component.css']
})
export class PostupdatesComponent implements OnInit {
  myemail: string="";
  friendemail: string="";
  description: string=""

  constructor(private dataService: DataService, private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  postupdates(postupdateform){
    const payload={email:this.myemail, friendemail:this.friendemail, description: this.description}
    this.dataService.postupdates(payload).subscribe(data=>{
      console.log(data);
      this.notificationService.success('Success', 'Update has been posted!', {
        position: ['bottom', 'center'],
        timeOut: 1400,
        animate: 'fade',
      });

    } );
    this.myemail="";
    this.description="";
    this.friendemail="";
    postupdateform.reset();
  }

}
