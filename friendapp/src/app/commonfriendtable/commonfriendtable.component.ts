import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { friend } from '../user.model';

@Component({
  selector: 'app-commonfriendtable',
  templateUrl: './commonfriendtable.component.html',
  styleUrls: ['./commonfriendtable.component.css'],
})
export class CommonfriendtableComponent implements OnInit {
  friendemail: string = '';
  myemail: string = '';
  test: friend[] = [];
  dataSource = new MatTableDataSource<friend>(this.test);
  displayedColumns: string[] = ['friendemail'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  refresh() {
    this.getcommonfriend();
  }

  getcommonfriend() {
    let friendlist = this.dataService.getcommonfriend(
      this.myemail,
      this.friendemail
    );
    friendlist.subscribe((data) => (this.dataSource.data = data));
  }
  
  applyfilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
