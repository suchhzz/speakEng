import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateAiMessageDto } from './dto/create-ai-message.dto';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Post('/ai')
  async createAiMessage(@Body() createAiMessage: CreateAiMessageDto) {
    return await this.messageService.createAiMessage(createAiMessage);
  }

  @Get()
  findAll() {
    return this.messageService.findAll();
  }
}
