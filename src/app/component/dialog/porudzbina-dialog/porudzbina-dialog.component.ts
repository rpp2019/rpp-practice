import { Dobavljac } from './../../../model/dobavljac.model';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { PorudzbinaService } from 'src/app/service/porudzbina.service';
import { DobavljacService } from 'src/app/service/dobavljac.service';
import { Porudzbina } from 'src/app/model/porudzbina.model';

@Component({
  selector: 'app-porudzbina-dialog',
  templateUrl: './porudzbina-dialog.component.html',
  styleUrls: ['./porudzbina-dialog.component.css']
})
export class PorudzbinaDialogComponent implements OnInit {
  dobavljaci: Dobavljac[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<PorudzbinaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Porudzbina,
              public porudzbinaService: PorudzbinaService,
              public dobavljacService: DobavljacService
  ) { }

  ngOnInit() {
    this.dobavljacService.getAllDobavljac().subscribe(dobavljaci =>
      this.dobavljaci = dobavljaci
    );
  }
  compareTo(a, b) {
    return a.id === b.id;
  }
  onChange(dobavljac) {
    this.data.dobavljac = dobavljac;
  }

  public add(): void {
    this.data.id = -1;
    this.porudzbinaService.addPorudzbina(this.data);
    this.snackBar.open('Uspešno dodata porudžbina', 'Uredu', { duration: 2500 });
  }

  public update(): void {
    this.porudzbinaService.updatePorudzbina(this.data);
    this.snackBar.open('Uspešno modifikovana porudžbina', 'U redu', { duration: 2500 });
  }

  public delete(): void {
    this.porudzbinaService.deletePorudzbina(this.data.id);
    this.snackBar.open('Uspešno obrisana porudžbina', 'U redu', { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 1000 });
  }
 }
