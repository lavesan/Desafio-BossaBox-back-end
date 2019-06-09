import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { Test, TestingModule } from '@nestjs/testing';
// import { NestFactory } from '@nestjs/core';
import { ToolModule } from '../src/tool/tool.module';
import * as supertest from 'supertest';
import * as superagent from 'superagent';
import { expect } from 'chai';
import { Application } from 'express';

describe('UserModule', () => {
  let instance: Application;
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ToolModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.init();
    // instance = AbstractHttpAdapter.create();
    // application = NestFactory.create(ToolModule, instance);
    // application.init();
  });

  describe('#endpoint /users', () => {
    it('should expose GET method', done => {
      supertest(instance)
        .get('/tools')
        .end((error, response: superagent.Response) => {
          expect(response.status).to.not.be.equal(404);
          done();
        });
    });

    it('should expose POST method', done => {
      supertest(instance)
        .post('/tools')
        .send(JSON.stringify({ title: 'nickname', link: 'link', description: 'description', tags: [ 'tag1', 'tag2' ] }))
        .end((error, response: superagent.Response) => {
          expect(response.status).to.not.be.equal(404);
          done();
        });
    });
  });

});