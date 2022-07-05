import { BaseAPI } from './index';
import { Injectable } from '@nestjs/common';
import { CreateTrackInput } from 'src/modules/tracks/dto/create-track.input';
import { UpdateTrackInput } from 'src/modules/tracks/dto/update-track.input';

@Injectable()
export class TracksAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_API_URL;
  }

  async create(createTrackInput: CreateTrackInput) {
    try {
      return await this.post('', createTrackInput);
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

  async update(id: string, updateTrackInput: UpdateTrackInput) {
    try {
      return await this.put(encodeURIComponent(id), updateTrackInput);
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
