// tourTypes.ts

// Define the type for a tour
export interface Tour {
    id: string;
    name: string;
    price: number;
    length: string;
    groupSize: string;
    type: string;
    place: string;
  }
  
  // Define the type for the filters
  export interface Filters {
    priceFilter?: string;
    priceRange?: [number, number];
    tourLength?: string;
    groupSize?: string;
    searchPlace?: string;
    tourType?: string;
  }
  