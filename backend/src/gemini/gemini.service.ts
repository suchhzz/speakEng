import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GeminiService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async generateMessage(prompt: string) {
    try {
      const geminiKey = this.configService.get<string>('geminiApiKey');
      const geminiUrl = this.configService.get<string>('geminiUrl');
      const geminiModel = this.configService.get<string>('geminiModel');

      console.log(geminiKey);

      const requestBody = this.getGeminiRequest(prompt);

      const response$ = this.httpService.post(
        `${geminiUrl}/${geminiModel}:generateContent`,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-goog-api-key': geminiKey,
          },
        },
      );

      return await lastValueFrom(response$);
    } catch (error) {
      console.error('Ошибка при вызове Gemini API:', error.message);
      throw error;
    }
  }

  getGeminiRequest(prompt: string) {
    return {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };
  }
}
