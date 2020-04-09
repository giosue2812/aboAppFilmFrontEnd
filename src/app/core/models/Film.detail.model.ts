export interface Personnes {
  nom: string;
  prenom: string;
}

export interface Realisateurs {
  nom: string;
  prenom: string;
}

export interface FilmDetailModel {
  id: number;
  titre: string;
  date_sortie: string;
  bande_annoce: string;
  personnes: Personnes[];
  realisateurs: Realisateurs;
}
