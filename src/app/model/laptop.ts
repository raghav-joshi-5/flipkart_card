export interface Iloptop {
  id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  screenSize: string;
  battery: string;
  price: number;
  offerPrice: number;
  isAvailable: boolean;
  rating: number;
  noOfItems: number;
  imagePath?: string;
  specification?: Array<string>;
}
