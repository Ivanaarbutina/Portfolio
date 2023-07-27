export type EuropeType = {
  name: CountryType;
  flags: FlagsType;
  capital: string[];
  population: number;
  borders: string[];
  maps: MapsType;
  car: CarType;
};

export type CarType = {
  signs: string[];
  side: string;
};

export type MapsType = {
  googleMaps: string;
  openStreetMaps: string;
};

export type FlagsType = {
  png: string;
  svg: string;
};

export type CountryType = {
  common: string;
};
