import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatroomModule } from './chatroom/chatroom.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [ChatroomModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
