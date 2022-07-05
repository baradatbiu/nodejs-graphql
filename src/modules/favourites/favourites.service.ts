import { mapIDField } from './../../utils/mapObjectFields';
import { FavouritesAPI } from './../../api/favourites';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavouritesService {
  constructor(private readonly favouritesAPI: FavouritesAPI) {}

  async findAll() {
    const { items: favourites } = await this.favouritesAPI.getAll();

    return favourites.map((favourite) => mapIDField({ ...favourite }));
  }

  async add({ id, type }: { id: string; type: string }, token: string) {
    this.favouritesAPI.context.token = token;

    const favourite = await this.favouritesAPI.add({ id, type });

    return mapIDField({ ...favourite });
  }

  async remove({ id, type }: { id: string; type: string }, token: string) {
    this.favouritesAPI.context.token = token;

    const favourite = await this.favouritesAPI.remove({ id, type });

    return mapIDField({ ...favourite });
  }
}
