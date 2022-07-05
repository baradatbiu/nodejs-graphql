import { BaseAPI } from './index';
import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from 'src/modules/albums/dto/create-album.input';
import { UpdateAlbumInput } from 'src/modules/albums/dto/update-album.input';

@Injectable()
export class AlbumsAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_API_URL;
  }

  async create(createAlbumInput: CreateAlbumInput) {
    try {
      return await this.post('', createAlbumInput);
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

  async update(id: string, updateAlbumInput: UpdateAlbumInput) {
    try {
      return await this.put(encodeURIComponent(id), updateAlbumInput);
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
