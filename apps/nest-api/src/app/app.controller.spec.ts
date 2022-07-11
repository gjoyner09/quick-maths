import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('add', () => {
    it('should correctly sum two numbers', () => {
      expect(appController.add({ numberOne: 4, numberTwo: 7 })).toEqual({
        result: 11,
      });
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(appController.subtract({ numberOne: 4, numberTwo: 7 })).toEqual({
        result: -3,
      });
    });
  });
});
