import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { GeminiService } from 'src/gemini/gemini.service';
import { CreateAiMessageDto } from './dto/create-ai-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly geminiService: GeminiService) {}

  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
  }

  async createAiMessage(createAiMessageDto: CreateAiMessageDto) {
    const geminiResponse = await this.geminiService.generateMessage(
      createAiMessageDto.message,
    );

    console.log(geminiResponse);

    return geminiResponse.data.candidates[0].content.parts[0].text;
  }

  findAll() {
    return `This action returns all message`;
  }
}
