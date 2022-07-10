import { BaseAPI } from './../../api/index';
import { mapIDField } from './../../utils/mapObjectFields';
import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Injectable()
export class ArtistsService extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_API_URL;
  }

  async create(createArtistInput: CreateArtistInput, token: string) {
    try {
      this.context.token = token;

      const artist = await this.post('', createArtistInput);

      return mapIDField({ ...artist });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async findOne(id: string) {
    try {
      const artist = await this.get(encodeURIComponent(id));

      return mapIDField({ ...artist });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async findAll(limit: number, offset: number) {
    try {
      const { items: artists } = await this.get('/', {
        params: { limit, offset },
      });

      return artists.map((artist) => mapIDField({ ...artist }));
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async update(updateArtistInput: UpdateArtistInput, token: string) {
    try {
      this.context.token = token;

      const artist = await this.put(
        encodeURIComponent(updateArtistInput.id),
        updateArtistInput,
      );

      return mapIDField({ ...artist });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async remove(id: string, token: string) {
    try {
      this.context.token = token;

      return await this.delete(encodeURIComponent(id));
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }
}
