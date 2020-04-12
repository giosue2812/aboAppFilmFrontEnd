export interface Realisateurs {
  id: number;
  nom: string;
  prenom: string;
  ad_rue: string;
  ad_code_postal: number;
  ad_ville: string;
  tel?: any;
}

export interface films {
  id: number;
  titre: string;
  description: string;
  date_sortie: string;
  bande_annoce: string;
  image: string;
  realisateurs: Realisateurs;
}

export interface acteurs {
  id: number;
  nom: string;
  prenom: string;
  ad_rue: string;
  ad_code_postal?: number;
  ad_ville?: string;
  tel?: any;
}

export interface FilmDetailModel {
  id: number;
  films: films;
  acteurs: acteurs;
}
