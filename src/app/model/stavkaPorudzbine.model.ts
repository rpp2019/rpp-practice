import { Artikl } from './artikl.model';
import { Porudzbina } from './porudzbina.model';

export class StavkaPorudzbine {
  id: number;
  redniBroj: number;
  kolicina: number;
  jedinicaMere: string;
  cena: number;
  porudzbina: Porudzbina;
  artikl: Artikl;
}
