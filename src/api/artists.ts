import { BaseAPI } from './index';
import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from 'src/modules/artists/dto/create-artist.input';
import { UpdateArtistInput } from 'src/modules/artists/dto/update-artist.input';

@Injectable()
export class ArtistsAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_API_URL;
  }

  async create(createArtistInput: CreateArtistInput) {
    try {
      return await this.post('', createArtistInput);
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }

  async getAll() {
    try {
      return await this.get('');
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }

  async getById(id: string) {
    try {
      return await this.get(encodeURIComponent(id));
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }

  async update(id: string, updateArtistInput: UpdateArtistInput) {
    try {
      return await this.put(encodeURIComponent(id), updateArtistInput);
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }

  async remove(id: string) {
    try {
      return await this.delete(encodeURIComponent(id));
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }
}
