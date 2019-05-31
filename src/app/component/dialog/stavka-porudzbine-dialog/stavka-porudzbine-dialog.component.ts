import { ArtiklService } from 'src/app/service/artikl.service';
import { Artikl } from 'src/app/model/artikl.model';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Porudzbina } from 'src/app/model/porudzbina.model';
import { StavkaPorudzbine } from 'src/app/model/stavkaPorudzbine.model';
import { StavkaPorudzbineService } from 'src/app/service/stavkaPorudzbine.service';
import { PorudzbinaService } from 'src/app/service/porudzbina.service';

@Component({
  selector: 'app-stavka-porudzbine-dialog',
  templateUrl: './stavka-porudzbine-dialog.component.html',
  styleUrls: ['./stavka-porudzbine-dialog.component.css']
})
export class StavkaPorudzbineDialogComponent implements OnInit {

  porudzbine: Porudzbina[];
  artikli: Artikl[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StavkaPorudzbineDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: StavkaPorudzbine,
              public stavkaPorudzbineService: StavkaPorudzbineService,
              public porudzbinaService: PorudzbinaService,
              public artiklService: ArtiklService) {
     }


     ngOnInit() {
      this.porudzbinaService.getAllPorudzbina().subscribe(porudzbine =>
        this.porudzbine = porudzbine
      );
      this.artiklService.getAllArtikl().subscribe(artikli =>
        this.artikli = artikli
      );
    }

  compareTo(a, b) {
    return a.id === b.id;
  }

  public add(): void {
    this.stavkaPorudzbineService.addStavkaPorudzbine(this.data);
    this.snackBar.open('Uspešno dodata stavka porudzbine: ' + this.data.id, 'U redu', {
      duration: 2500,
    });
  }

  public update(): void {
    this.stavkaPorudzbineService.updateStavkaPorudzbine(this.data);
    this.snackBar.open('Uspešno modifikovana stavka poruzbine: ' + this.data.id, 'U redu', {
      duration: 2000,
    });
  }

  public delete(): void {
    this.stavkaPorudzbineService.deleteStavkaPorudzbine(this.data.id);
    this.snackBar.open('Uspešno obrisana stavka porudzbine: ' + this.data.id, 'U edu', {
      duration: 2000,
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {
      duration: 1000,
    });
  }
}
