export interface Property {
  propertyName: string;
  status: string;
  streetName: string;
  state: string;
  description: string;
  propertyType: string;
  rent: number;
  city: string;
  zipCode: string;
  maintenanceHistory: string;
  image: string | ArrayBuffer | null;
  places: string[];
}
