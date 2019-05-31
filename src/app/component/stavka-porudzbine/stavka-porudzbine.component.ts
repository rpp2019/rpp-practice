import { StavkaPorudzbineDialogComponent } from './../dialog/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';
import { Artikl } from 'src/app/model/artikl.model';
import { StavkaPorudzbineService } from 'src/app/service/stavkaPorudzbine.service';
import { StavkaPorudzbine } from 'src/app/model/stavkaPorudzbine.model';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Porudzbina } from 'src/app/model/porudzbina.model';

@Component({
  selector: 'app-stavka-porudzbine',
  templateUrl: './stavka-porudzbine.component.html',
  styleUrls: ['./stavka-porudzbine.component.css']
})
export class StavkaPorudzbineComponent implements OnInit {

  displayedColumns = ['id', 'redniBroj', 'kolicina', 'jedinicaMere', 'cena', 'porudzbina', 'artikl', 'actions'];
  dataSource: Observable<StavkaPorudzbine[]>;

  @Input() selektovanaPorudzbina: Porudzbina;

  constructor(public httpClient: HttpClient, public stavkaPorudzbineService: StavkaPorudzbineService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges() {
    if (this.selektovanaPorudzbina.id) {
      this.loadData();
    }
  }

  public openDialog(flag: number, id: number, redniBroj: number, kolicina: number, jedinicaMere: number, cena: number,
                    porudzbina: Porudzbina, artikl: Artikl) {
    const dialogRef = this.dialog.open(StavkaPorudzbineDialogComponent, { data: { id: id, redniBroj: redniBroj, kolicina: kolicina,
                    jedinicaMere: jedinicaMere, cena: cena, porudzbina: porudzbina, artikl: artikl} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  public loadData() {
    this.dataSource = this.stavkaPorudzbineService.getStavkaZaPorudzbinu(this.selektovanaPorudzbina.id);
}

}
