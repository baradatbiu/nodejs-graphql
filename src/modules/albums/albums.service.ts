import { BaseAPI } from './../../api/index';
import { mapIDField } from './../../utils/mapObjectFields';
import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';

@Injectable()
export class AlbumsService extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_API_URL;
  }

  async create(createAlbumInput: CreateAlbumInput, token: string) {
    this.context.token = token;

    const genre = await this.post('', createAlbumInput);

    return mapIDField({ ...genre });
  }

  async findOne(id: string) {
    const genre = await this.get(encodeURIComponent(id));

    return mapIDField({ ...genre });
  }

  async findAll(limit: number, offset: number) {
    const { items: albums } = await this.get('/', {
      params: { limit, offset },
    });

    return albums.map((genre) => mapIDField({ ...genre }));
  }

  async update(updateAlbumInput: UpdateAlbumInput, token: string) {
    this.context.token = token;

    const genre = await this.put(
      encodeURIComponent(updateAlbumInput.id),
      updateAlbumInput,
    );

    return mapIDField({ ...genre });
  }

  async remove(id: string, token: string) {
    this.context.token = token;

    return await this.delete(encodeURIComponent(id));
  }
}
