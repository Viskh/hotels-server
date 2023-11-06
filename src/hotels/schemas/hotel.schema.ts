import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Facility } from '../hotels.types';

@Schema()
export class Hotel extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  address: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  stars: number;

  @Prop()
  description: string;

  @Prop([String])
  photos: string[];

  @Prop()
  facility: Facility[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
