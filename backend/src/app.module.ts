import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatroomModule } from './chatroom/chatroom.module';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';
import aiConfig from './config/ai.config';

@Module({
  imports: [
    ChatroomModule,
    MessageModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [aiConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
