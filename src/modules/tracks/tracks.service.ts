import { TracksAPI } from './../../api/tracks';
import { Injectable } from '@nestjs/common';
import { mapIDField } from './../../utils/mapObjectFields';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';

@Injectable()
export class TracksService {
  constructor(private readonly tracksAPI: TracksAPI) {}

  async create(createTrackInput: CreateTrackInput, token: string) {
    this.tracksAPI.context.token = token;

    const genre = await this.tracksAPI.create(createTrackInput);

    return mapIDField({ ...genre });
  }

  async findOne(id: string) {
    const genre = await this.tracksAPI.getById(id);

    return mapIDField({ ...genre });
  }

  async findAll() {
    const { items: tracks } = await this.tracksAPI.getAll();

    return tracks.map((genre) => mapIDField({ ...genre }));
  }

  async update(updateTrackInput: UpdateTrackInput, token: string) {
    this.tracksAPI.context.token = token;

    const genre = await this.tracksAPI.update(
      updateTrackInput.id,
      updateTrackInput,
    );

    return mapIDField({ ...genre });
  }

  async delete(id: string, token: string) {
    this.tracksAPI.context.token = token;

    return await this.tracksAPI.remove(id);
  }
}
