import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';
import { AppService } from '../src/app/app.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  const appService = {
    add: (numberOne, numberTwo) => numberOne + numberTwo,
    subtract: (numberOne, numberTwo) => numberOne - numberTwo,
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`completes a successful POST request`, () => {
    return request(app.getHttpServer())
      .post('/api/maths/add')
      .send({ numberOne: 7, numberTwo: 4 })
      .expect(200)
      .expect({
        data: appService.add(7, 4),
      });
  });

  it(`throws a 400 error for incorrect key in the request body`, () => {
    return request(app.getHttpServer())
      .post('/api/maths/add')
      .send({ numberOne: 7, incorrectKey: 4 })
      .expect(400);
  });

  it(`throws a 400 error for missing key in the request body`, () => {
    return request(app.getHttpServer())
      .post('/api/maths/add')
      .send({ numberOne: 7 })
      .expect(400);
  });

  it(`throws a 400 error for extra key in the request body`, () => {
    return request(app.getHttpServer())
      .post('/api/maths/add')
      .send({ numberOne: 7, numberTwo: 4, numberThree: 6 })
      .expect(400);
  });

  it(`throws a 400 error for incorrect type in the request body`, () => {
    return request(app.getHttpServer())
      .post('/api/maths/add')
      .send({
        numberOne: '7',
        numberTwo: 4,
      })
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
