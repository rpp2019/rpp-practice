import { Dobavljac } from './../../model/dobavljac.model';
import { DobavljacDialogComponent } from './../dialog/dobavljac-dialog/dobavljac-dialog.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DobavljacService } from './../../service/dobavljac.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dobavljac',
  templateUrl: './dobavljac.component.html',
  styleUrls: ['./dobavljac.component.css']
})
export class DobavljacComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt', 'actions'];
  exampleDatabase: DobavljacService | null;
  dataSource: Observable<Dobavljac[]>;

  constructor(public httpClient: HttpClient, public dobavljacService: DobavljacService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadData();
  }

  public openDialog(flag: number, id: number, naziv: string, adresa: string, kontakt: string) {
    const dialogRef = this.dialog.open(DobavljacDialogComponent, { data: { id: id, naziv: naziv, adresa: adresa, kontakt: kontakt } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  public loadData() {
    this.dataSource = this.dobavljacService.getAllDobavljac();
  }

}
