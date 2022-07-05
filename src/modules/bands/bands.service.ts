import { BandsAPI } from './../../api/bands';
import { Injectable } from '@nestjs/common';
import { mapIDField } from './../../utils/mapObjectFields';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Injectable()
export class BandsService {
  constructor(private readonly bandsAPI: BandsAPI) {}

  async create(createBandInput: CreateBandInput, token: string) {
    this.bandsAPI.context.token = token;

    const genre = await this.bandsAPI.create(createBandInput);

    return mapIDField({ ...genre });
  }

  async findOne(id: string) {
    const genre = await this.bandsAPI.getById(id);

    return mapIDField({ ...genre });
  }

  async findAll() {
    const { items: bands } = await this.bandsAPI.getAll();

    return bands.map((genre) => mapIDField({ ...genre }));
  }

  async update(updateBandInput: UpdateBandInput, token: string) {
    this.bandsAPI.context.token = token;

    const genre = await this.bandsAPI.update(
      updateBandInput.id,
      updateBandInput,
    );

    return mapIDField({ ...genre });
  }

  async delete(id: string, token: string) {
    this.bandsAPI.context.token = token;

    return await this.bandsAPI.remove(id);
  }
}
