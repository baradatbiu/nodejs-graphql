import { ArtistsAPI } from './../../api/artists';
import { mapIDField } from './../../utils/mapObjectFields';
import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Injectable()
export class ArtistsService {
  constructor(private readonly artistsAPI: ArtistsAPI) {}

  async create(createArtistInput: CreateArtistInput, token: string) {
    this.artistsAPI.context.token = token;

    const genre = await this.artistsAPI.create(createArtistInput);

    return mapIDField({ ...genre });
  }

  async findOne(id: string) {
    const genre = await this.artistsAPI.getById(id);

    return mapIDField({ ...genre });
  }

  async findAll() {
    const { items: artists } = await this.artistsAPI.getAll();

    return artists.map((genre) => mapIDField({ ...genre }));
  }

  async update(updateArtistInput: UpdateArtistInput, token: string) {
    this.artistsAPI.context.token = token;

    const genre = await this.artistsAPI.update(
      updateArtistInput.id,
      updateArtistInput,
    );

    return mapIDField({ ...genre });
  }

  async delete(id: string, token: string) {
    this.artistsAPI.context.token = token;

    return await this.artistsAPI.remove(id);
  }
}
