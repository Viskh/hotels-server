import { ObjectId } from 'mongoose';
import { Facility, RoomType } from '../rooms.types';

export class CreateRoomDto {
  number: number;
  type: RoomType;
  description: string;
  price: string;
  available: boolean;
  floor: number;
  facilities: Facility[];
  photos: string[];
  hotel: ObjectId;
}
