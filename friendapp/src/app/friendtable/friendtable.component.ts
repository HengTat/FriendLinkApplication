import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { delay, map } from 'rxjs/operators';
import { DataService } from 'src/app/data.service';
import { friend, friendwithproperties } from 'src/app/user.model';


@Component({
  selector: 'app-friendtable',
  templateUrl: './friendtable.component.html',
  styleUrls: ['./friendtable.component.css'],
})
export class FriendtableComponent implements OnInit {
  test: friendwithproperties[] = [];
  dataSource = new MatTableDataSource<friendwithproperties>(this.test);
  displayedColumns: string[] = ['friendemail', 'subscription', 'block'];
  myemail: string = '';
  searchText: string = '';
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  refreshfriendlist() {
    this.getfriendlist();
  }

  async changesubscription(friendemail, subscription) {
    var payload: { subscription: boolean };
    if (subscription) {
      payload = { subscription: false };
    } else {
      payload = { subscription: true };
    }
    this.dataService
      .changesubscription(payload, this.myemail, friendemail)
      .subscribe((x) => console.log(x));
    await delay(800);
    this.getfriendlist();
  }

  async changeblock(friendemail, block) {
    var payload: { block: boolean };
    if (block) {
      payload = { block: false };
    } else {
      payload = { block: true };
    }
    this.dataService
      .changeblock(payload, this.myemail, friendemail)
      .subscribe((x) => console.log(x));
    await delay(800);
    this.getfriendlist();
  }

  public getfriendlist() {
    let x = this.dataService.getfriends(this.myemail);
    x.subscribe((data) => {
      this.dataSource.data = data as friendwithproperties[];
    });
  }

  applyfilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
