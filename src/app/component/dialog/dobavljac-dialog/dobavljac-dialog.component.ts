import { Dobavljac } from './../../../model/dobavljac.model';
import { DobavljacService } from './../../../service/dobavljac.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dobavljac-dialog',
  templateUrl: './dobavljac-dialog.component.html',
  styleUrls: ['./dobavljac-dialog.component.css']
})
export class DobavljacDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<DobavljacDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Dobavljac,
              public dobavljacService: DobavljacService) {
     }


  ngOnInit() {
  }

  public add(): void {
    this.dobavljacService.addDobavljac(this.data);
    this.snackBar.open('Uspešno dodat dobavljac: ' + this.data.naziv, 'Uredu', {
      duration: 2500,
    });
  }

  public update(): void {
    this.dobavljacService.updateDobavljac(this.data);
    this.snackBar.open('Uspešno modifikovan dobavljaca: ' + this.data.id, 'Uredu', {
      duration: 2000,
    });
  }

  public delete(): void {
    this.dobavljacService.deleteDobavljac(this.data.id);
    this.snackBar.open('Uspešno obrisan dobavljac: ' + this.data.id, 'Uredu', {
      duration: 2000,
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {
      duration: 1000,
    });
  }

}
