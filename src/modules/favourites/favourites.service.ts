import { BaseAPI } from './../../api/index';
import { mapIDField } from './../../utils/mapObjectFields';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavouritesService extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_API_URL;
  }

  async findAll(token: string) {
    this.context.token = token;

    const favourite = await this.get('');

    return mapIDField({ ...favourite });
  }

  async add({ id, type }: { id: string; type: string }, token: string) {
    this.context.token = token;

    const favourite = await this.put('add', { id, type });

    return mapIDField({ ...favourite });
  }

  async remove({ id, type }: { id: string; type: string }, token: string) {
    this.context.token = token;

    const favourite = await this.put('remove', { id, type });

    return mapIDField({ ...favourite });
  }
}
