import { BaseAPI } from './index';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavouritesAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_API_URL;
  }

  async getAll() {
    try {
      return await this.get('');
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }

  async add({ id, type }: { id: string; type: string }) {
    try {
      return await this.put('add', { id, type });
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }

  async remove({ id, type }: { id: string; type: string }) {
    try {
      return await this.put('remove', { id, type });
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }
}
