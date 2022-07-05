import { BaseAPI } from './index';
import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from 'src/modules/genres/dto/create-genre.input';
import { UpdateGenreInput } from 'src/modules/genres/dto/update-genre.input';

@Injectable()
export class GenresAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_API_URL;
  }

  async create(createGenreInput: CreateGenreInput) {
    try {
      return await this.post('', createGenreInput);
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

  async update(id: string, updateGenreInput: UpdateGenreInput) {
    try {
      return await this.put(encodeURIComponent(id), updateGenreInput);
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
