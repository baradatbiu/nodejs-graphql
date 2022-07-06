import { BandsAPI } from './../../api/bands';
import { ArtistsAPI } from './../../api/artists';
import { mapIDField } from './../../utils/mapObjectFields';
import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Injectable()
export class ArtistsService {
  constructor(
    private readonly artistsAPI: ArtistsAPI,
    private readonly bandsAPI: BandsAPI,
  ) {}

  async create(createArtistInput: CreateArtistInput, token: string) {
    this.artistsAPI.context.token = token;
    this.bandsAPI.context.token = token;

    const artist = await this.artistsAPI.create(createArtistInput);

    return await this.fillArtist(artist);
  }

  async findOne(id: string) {
    const artist = await this.artistsAPI.getById(id);

    return await this.fillArtist(artist);
  }

  async findAll() {
    const { items: artists } = await this.artistsAPI.getAll();

    return await Promise.all(
      artists.map(async (artist) => this.fillArtist(artist)),
    );
  }

  async update(updateArtistInput: UpdateArtistInput, token: string) {
    this.artistsAPI.context.token = token;
    this.bandsAPI.context.token = token;

    const artist = await this.artistsAPI.update(
      updateArtistInput.id,
      updateArtistInput,
    );

    return await this.fillArtist(artist);
  }

  async delete(id: string, token: string) {
    this.artistsAPI.context.token = token;

    return await this.artistsAPI.remove(id);
  }

  async fillArtist(artist) {
    const bands = await Promise.all(
      artist.bandsIds.map((id) => this.bandsAPI.getById(id)),
    );

    delete artist.bandsIds;

    return mapIDField({
      ...artist,
      bands: bands.map((band) => mapIDField({ ...band })),
    });
  }
}
