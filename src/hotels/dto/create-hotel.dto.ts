import { Facility } from '../hotels.types';

export class CreateHotelDto {
  name: string;

  address: string;

  city: string;

  country: string;

  stars: number;

  description: string;

  photos: string[];

  facility: Facility[];
}
