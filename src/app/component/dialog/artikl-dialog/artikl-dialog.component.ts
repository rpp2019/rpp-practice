import { Artikl } from './../../../model/artikl.model';
import { ArtiklService } from './../../../service/artikl.service';
import { OnInit, Inject, Component } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-artikl-dialog',
  templateUrl: './artikl-dialog.component.html',
  styleUrls: ['./artikl-dialog.component.css']
})
export class ArtiklDialogComponent implements OnInit {

  public flag: number;

constructor(public snackBar: MatSnackBar,
            public dialogRef: MatDialogRef<ArtiklDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any,
            public artiklService: ArtiklService) { }

  public add(): void {
    this.artiklService.addArtikl(this.data);
    this.snackBar.open('Uspešno dodat artikl: ' + this.data.naziv, 'Uredu', {
      duration: 2500,
    });
  }

  public update(artikl: Artikl): void {
      this.artiklService.updateArtikl(this.data);
      this.snackBar.open('Uspešno izmenjen artikl: ' + this.data.naziv, 'Uredu', {
        duration: 2000,
      });
    }

  public delete(): void {
    this.artiklService.deleteArtikl(this.data.id);
    this.snackBar.open('Uspešno obrisan artikl: ' + this.data.id, 'Uredu', {
      duration: 2000,
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'Uredu', {
      duration: 1000,
    });
  }

  ngOnInit() {
  }

}
