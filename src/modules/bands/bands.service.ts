import { BaseAPI } from './../../api/index';
import { Injectable } from '@nestjs/common';
import { mapIDField } from './../../utils/mapObjectFields';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Injectable()
export class BandsService extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_API_URL;
  }

  async create(createBandInput: CreateBandInput, token: string) {
    try {
      this.context.token = token;

      const band = await this.post('', createBandInput);

      return mapIDField({ ...band });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async findOne(id: string) {
    try {
      const band = await this.get(encodeURIComponent(id));

      return mapIDField({ ...band });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async findAll() {
    try {
      const { items: bands } = await this.get('');

      return bands.map((band) => mapIDField({ ...band }));
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async update(updateBandInput: UpdateBandInput, token: string) {
    try {
      this.context.token = token;

      const band = await this.put(
        encodeURIComponent(updateBandInput.id),
        updateBandInput,
      );

      return mapIDField({ ...band });
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
