import { StavkaPorudzbineService } from 'src/app/service/stavkaPorudzbine.service';
import { AutomobilComponent } from './priprema/automobil/automobil.component';
import { AuthorComponent } from './core/author/author.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DobavljacService } from './service/dobavljac.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule,
  MatExpansionModule, MatTableModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatNativeDateModule,
  MatDatepickerModule, MatSnackBarModule, MatDialogModule, MatInputModule, MatCheckboxModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtiklComponent } from './component/artikl/artikl.component';
import { DobavljacComponent } from './component/dobavljac/dobavljac.component';
import { PorudzbinaComponent } from './component/porudzbina/porudzbina.component';
import { StavkaPorudzbineComponent } from './component/stavka-porudzbine/stavka-porudzbine.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArtiklService } from './service/artikl.service';
import { ArtiklDialogComponent } from './component/dialog/artikl-dialog/artikl-dialog.component';
import { DobavljacDialogComponent } from './component/dialog/dobavljac-dialog/dobavljac-dialog.component';
import { PorudzbinaDialogComponent } from './component/dialog/porudzbina-dialog/porudzbina-dialog.component';
import { PorudzbinaService } from './service/porudzbina.service';
import { StavkaPorudzbineDialogComponent } from './component/dialog/stavka-porudzbine-dialog/stavka-porudzbine-dialog.component';
import { VoziloComponent } from './priprema/vozilo/vozilo.component';

const Routes = [{path: 'artikl', component: ArtiklComponent},
                {path: 'dobavljac', component: DobavljacComponent},
                {path: 'porudzbina', component: PorudzbinaComponent},
                {path: 'stavkaPorudzbine', component: StavkaPorudzbineComponent},
                {path: 'home', component: HomeComponent},
                {path: 'about', component: AboutComponent},
                {path: 'author', component: AuthorComponent},
                {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    ArtiklComponent,
    DobavljacComponent,
    PorudzbinaComponent,
    StavkaPorudzbineComponent,
    AboutComponent,
    AuthorComponent,
    HomeComponent,
    ArtiklDialogComponent,
    DobavljacDialogComponent,
    PorudzbinaDialogComponent,
    StavkaPorudzbineDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule
  ],

  entryComponents: [
    ArtiklDialogComponent,
    DobavljacDialogComponent,
    PorudzbinaDialogComponent,
    StavkaPorudzbineDialogComponent
  ],

  providers: [ArtiklService, DobavljacService, PorudzbinaService, StavkaPorudzbineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
