import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('add', () => {
    it('should correctly add two numbers', () => {
      expect(service.add(4, 7)).toEqual(11);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(service.subtract(4, 7)).toEqual(-3);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(service.subtract(7, 5)).toEqual(2);
    });
  });
});
