import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ToolModule } from '../src/tool/tool.module';
import { ToolService } from '../src/tool/tool.service';
import { ToolEntity } from '../src/entityes/tool.entity'
import { INestApplication } from '@nestjs/common';

describe('Tools', () => {
  let app: INestApplication;
  let toolService = { findAll: () => [
    {
        "id": 7,
        "title": "título 6",
        "link": "link6",
        "description": "descrição6",
        "tags": [
            "5",
            "9"
        ]
    },
    {
        "id": 11,
        "title": "título criado",
        "link": "link criado",
        "description": "",
        "tags": [
            "4",
            "6"
        ]
    },
    {
        "id": 12,
        "title": "título criado",
        "link": "link criado",
        "description": "",
        "tags": [
            "4",
            "6"
        ]
    },
    {
        "id": 15,
        "title": "título criado",
        "link": "link criado",
        "description": "alguma coisa",
        "tags": [
            "4",
            "10"
        ]
    },
    {
        "id": 16,
        "title": "título criado",
        "link": "Algum link ae",
        "description": "alguma coisa",
        "tags": [
            "1",
            "2"
        ]
    }
] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ToolModule],
    })
      .overrideProvider(ToolService)
      .useValue(toolService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET tools`, () => {
    return request(app.getHttpServer())
      .get('/tools')
      .expect(200)
      .expect({
        data: toolService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
