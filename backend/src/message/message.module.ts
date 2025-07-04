import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { GeminiModule } from 'src/gemini/gemini.module';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [GeminiModule],
})
export class MessageModule {}
