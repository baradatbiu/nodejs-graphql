import { BaseAPI } from './index';
import { Injectable } from '@nestjs/common';
import { CreateBandInput } from 'src/modules/bands/dto/create-band.input';
import { UpdateBandInput } from 'src/modules/bands/dto/update-band.input';

@Injectable()
export class BandsAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_API_URL;
  }

  async create(createBandInput: CreateBandInput) {
    try {
      return await this.post('', createBandInput);
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

  async update(id: string, updateBandInput: UpdateBandInput) {
    try {
      return await this.put(encodeURIComponent(id), updateBandInput);
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
