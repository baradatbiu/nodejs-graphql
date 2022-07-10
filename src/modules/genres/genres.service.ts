import { BaseAPI } from './../../api/index';
import { mapIDField } from './../../utils/mapObjectFields';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresService extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_API_URL;
  }

  async create(createGenreInput: CreateGenreInput, token: string) {
    try {
      this.context.token = token;

      const genre = await this.post('', createGenreInput);

      return mapIDField({ ...genre });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async findOne(id: string) {
    try {
      const genre = await this.get(encodeURIComponent(id));

      return mapIDField({ ...genre });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async findAll(limit: number, offset: number) {
    try {
      const { items: genres } = await this.get('/', {
        params: { limit, offset },
      });

      return genres.map((genre) => mapIDField({ ...genre }));
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async update(updateGenreInput: UpdateGenreInput, token: string) {
    try {
      this.context.token = token;

      const genre = await this.put(
        encodeURIComponent(updateGenreInput.id),
        updateGenreInput,
      );

      return mapIDField({ ...genre });
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
