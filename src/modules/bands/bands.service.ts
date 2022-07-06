import { ArtistsAPI } from './../../api/artists';
import { GenresAPI } from './../../api/genres';
import { BandsAPI } from './../../api/bands';
import { Injectable } from '@nestjs/common';
import { mapIDField } from './../../utils/mapObjectFields';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Injectable()
export class BandsService {
  constructor(
    private readonly artistsAPI: ArtistsAPI,
    private readonly bandsAPI: BandsAPI,
    private readonly genresAPI: GenresAPI,
  ) {}

  async create(createBandInput: CreateBandInput, token: string) {
    this.bandsAPI.context.token = token;
    this.artistsAPI.context.token = token;
    this.genresAPI.context.token = token;

    const band = await this.bandsAPI.create(createBandInput);

    return await this.fillBand(band);
  }

  async findOne(id: string) {
    const band = await this.bandsAPI.getById(id);

    return await this.fillBand(band);
  }

  async findAll() {
    const { items: bands } = await this.bandsAPI.getAll();

    return await Promise.all(bands.map((band) => this.fillBand(band)));
  }

  async update(updateBandInput: UpdateBandInput, token: string) {
    this.artistsAPI.context.token = token;
    this.bandsAPI.context.token = token;
    this.genresAPI.context.token = token;

    const band = await this.bandsAPI.update(
      updateBandInput.id,
      updateBandInput,
    );

    return await this.fillBand(band);
  }

  async delete(id: string, token: string) {
    this.bandsAPI.context.token = token;

    return await this.bandsAPI.remove(id);
  }

  async fillBand(band) {
    const genres = await Promise.all(
      band.genresIds.map((id) => this.genresAPI.getById(id)),
    );
    const artists = await Promise.all(
      band.members.map((id) => this.artistsAPI.getById(id)),
    );
    const members = artists.map((artist, index) => ({
      ...artist,
      instrument: band.members[index].instrument,
      years: band.members[index].years,
    }));

    delete band.genresIds;

    return mapIDField({
      ...band,
      genres: genres.map((genre) => mapIDField({ ...genre })),
      members: members.map((member) => mapIDField({ ...member })),
    });
  }
}
