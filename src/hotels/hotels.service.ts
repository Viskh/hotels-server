import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Hotel } from './schemas';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = await this.hotelModel.create(createHotelDto);

    return hotel;
  }

  async addMany(createHotelsDto: CreateHotelDto[]): Promise<Hotel[]> {
    const hotels = await this.hotelModel.insertMany(createHotelsDto);

    return hotels;
  }

  async findAll() {
    const hotels = await this.hotelModel.find();

    return hotels;
  }

  async findOne(id: ObjectId) {
    const hotel = await this.hotelModel.findById(id);

    return hotel;
  }

  async update(id: ObjectId, updateHotelDto: UpdateHotelDto) {
    const updatedHotel = await this.hotelModel.findByIdAndUpdate(
      id,
      updateHotelDto,
      { new: true },
    );

    return updatedHotel;
  }

  async remove(id: ObjectId) {
    await this.hotelModel.findByIdAndRemove(id);
  }
}
