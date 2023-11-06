import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Room } from './schema';
import { Hotel } from '../hotels/schemas';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private roomModel: Model<Room>,
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    const room = await this.roomModel.create(createRoomDto);

    return room;
  }

  async findAll() {
    const rooms = await this.roomModel.find();

    return rooms;
  }

  async findOne(id: ObjectId) {
    const room = await this.roomModel.findById(id);

    return room;
  }

  async findByHotelId(id: ObjectId) {
    const rooms = await this.roomModel.find({ hotel: id });

    return rooms;
  }

  async update(id: ObjectId, updateRoomDto: UpdateRoomDto) {
    const updatedRoom = await this.roomModel.findByIdAndUpdate(
      id,
      updateRoomDto,
      { new: true },
    );

    return updatedRoom;
  }

  async remove(id: ObjectId) {
    await this.roomModel.findByIdAndRemove(id);
  }
}
