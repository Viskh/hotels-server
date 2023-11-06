import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Facility, RoomType } from '../rooms.types';
import { Hotel } from '../../hotels/schemas';

@Schema()
export class Room extends Document {
  @Prop()
  number: number;

  @Prop()
  type: RoomType;

  @Prop()
  description: string;

  @Prop()
  price: string;

  @Prop({ default: false })
  available: boolean;

  @Prop()
  floor: number;

  @Prop([String])
  facilities: Facility[];

  @Prop([String])
  photos: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' })
  hotel: Hotel;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
