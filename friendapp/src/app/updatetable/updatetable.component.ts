import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { updates } from 'src/app/user.model';

@Component({
  selector: 'app-updatetable',
  templateUrl: './updatetable.component.html',
  styleUrls: ['./updatetable.component.css'],
})
export class UpdatetableComponent implements OnInit {
  myemail: string = '';
  test: updates[] = [];
  dataSource = new MatTableDataSource<updates>(this.test);
  displayedColumns: string[] = ['friendemail', 'description'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getupdates() {
    let x = this.dataService.getupdates(this.myemail);
    x.pipe(
      map((data) => {
        return data.map((item) => {
          return new updates(item['email'], item['description']);
        });
      })
    ).subscribe((data) => (this.dataSource.data = data as updates[]));
  }

  applyfilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
