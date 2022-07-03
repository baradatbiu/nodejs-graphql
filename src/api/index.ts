import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseAPI extends RESTDataSource {
  constructor() {
    super();
    this.initialize({
      context: {},
      cache: undefined,
    });
  }

  willSendRequest(request: RequestOptions) {
    if (request.body && typeof request.body === 'object') {
      request.body = { ...request.body };
    }

    if (!this.context?.token) return;

    request.headers.set('Authorization', this.context.token);
  }
}
