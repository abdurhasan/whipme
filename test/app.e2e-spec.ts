import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404)

  });
});



// describe('GET /users', () => {
//   it('should return an array of users', async () => {
//     // Pre-populate the DB with some dummy users
//     await repository.save([
//       { name: 'test-name-0' },
//       { name: 'test-name-1' },
//     ]);

//     // Run your end-to-end test
//     const { body } = await supertest.agent(app.getHttpServer())
//       .get('/users')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200);

//     expect(body).toEqual([
//       { id: expect.any(Number), name: 'test-name-0' },
//       { id: expect.any(Number), name: 'test-name-1' },
//     ]);
//   });
// });