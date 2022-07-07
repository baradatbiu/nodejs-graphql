import { BaseAPI } from './../../api/index';
import { Injectable } from '@nestjs/common';
import { mapIDField } from './../../utils/mapObjectFields';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';

@Injectable()
export class TracksService extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_API_URL;
  }

  async create(createTrackInput: CreateTrackInput, token: string) {
    this.context.token = token;

    const genre = await this.post('', createTrackInput);

    return mapIDField({ ...genre });
  }

  async findOne(id: string) {
    const genre = await this.get(encodeURIComponent(id));

    return mapIDField({ ...genre });
  }

  async findAll() {
    const { items: tracks } = await this.get('');

    return tracks.map((genre) => mapIDField({ ...genre }));
  }

  async update(updateTrackInput: UpdateTrackInput, token: string) {
    this.context.token = token;

    const genre = await this.put(
      encodeURIComponent(updateTrackInput.id),
      updateTrackInput,
    );

    return mapIDField({ ...genre });
  }

  async remove(id: string, token: string) {
    this.context.token = token;

    return await this.delete(encodeURIComponent(id));
  }
}
