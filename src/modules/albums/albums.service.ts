import { AlbumsAPI } from './../../api/albums';
import { mapIDField } from './../../utils/mapObjectFields';
import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';

@Injectable()
export class AlbumsService {
  constructor(private readonly albumsAPI: AlbumsAPI) {}

  async create(createAlbumInput: CreateAlbumInput, token: string) {
    this.albumsAPI.context.token = token;

    const genre = await this.albumsAPI.create(createAlbumInput);

    return mapIDField({ ...genre });
  }

  async findOne(id: string) {
    const genre = await this.albumsAPI.getById(id);

    return mapIDField({ ...genre });
  }

  async findAll() {
    const { items: albums } = await this.albumsAPI.getAll();

    return albums.map((genre) => mapIDField({ ...genre }));
  }

  async update(updateAlbumInput: UpdateAlbumInput, token: string) {
    this.albumsAPI.context.token = token;

    const genre = await this.albumsAPI.update(
      updateAlbumInput.id,
      updateAlbumInput,
    );

    return mapIDField({ ...genre });
  }

  async delete(id: string, token: string) {
    this.albumsAPI.context.token = token;

    return await this.albumsAPI.remove(id);
  }
}
