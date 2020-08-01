import { Component, OnInit } from '@angular/core';
import { DynamictableService } from './dynamic.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  tableData: Array<any>;

  constructor(private _dynamictableService: DynamictableService) {
    this.tableData = [];
  }

  ngOnInit() {}

  getTableData(val) {
    if (val) {
      this._dynamictableService.getBooksListById(val).subscribe(
        (res) => {
          this.tableData = [];
          this.tableData.push(res);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this._dynamictableService.postBooksList().subscribe((res) => {
        // this.tableData = [...res];
      });
    }
  }
}
