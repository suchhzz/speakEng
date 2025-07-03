import { Injectable } from '@nestjs/common';
import { CreateChatroomDto } from './dto/create-chatroom.dto';

@Injectable()
export class ChatroomService {
  create(createChatroomDto: CreateChatroomDto) {
    return 'This action adds a new chatroom';
  }

  findAll() {
    return `This action returns all chatroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatroom`;
  }
}
