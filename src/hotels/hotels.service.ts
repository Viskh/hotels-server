import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Hotel } from './schemas';
import { HotelsQuery } from './hotels.types';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) {}

  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = await this.hotelModel.create(createHotelDto);

    return hotel;
  }

  async addMany(createHotelsDto: CreateHotelDto[]) {
    const hotels = await this.hotelModel.insertMany(createHotelsDto);

    return { data: hotels };
  }

  async findAll({ page = 1, limit = 10, ...filter }: HotelsQuery) {
    const count = await this.hotelModel.countDocuments({}).exec();
    const pageTotal = Math.floor((count - 1) / limit) + 1;
    const skip = (page - 1) * limit;

    const hotels = await this.hotelModel
      .find(filter && filter)
      .limit(limit)
      .skip(skip)
      .exec();

    return { data: hotels, pageTotal };
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
