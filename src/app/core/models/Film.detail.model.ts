export interface Realisateurs {
  id: number;
  nom: string;
  prenom: string;
  ad_rue: string;
  ad_code_postal: number;
  ad_ville: string;
  tel?: any;
}

export interface _films {
  id: number;
  titre: string;
  description: string;
  date_sortie: string;
  bande_annoce: string;
  image: string;
  realisateurs: Realisateurs;
}

export interface _acteurs {
  id: number;
  nom: string;
  prenom: string;
  ad_rue: string;
  ad_code_postal: number;
  ad_ville: string;
  tel?: any;
}

export interface FilmDetailModel {
  id: number;
  _films: _films;
  _acteurs: _acteurs;
}
