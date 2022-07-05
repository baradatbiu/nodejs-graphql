import { GenresAPI } from './../../api/genres';
import { mapIDField } from './../../utils/mapObjectFields';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresService {
  constructor(private readonly genresAPI: GenresAPI) {}

  async create(createGenreInput: CreateGenreInput, token: string) {
    this.genresAPI.context.token = token;

    const genre = await this.genresAPI.create(createGenreInput);

    return mapIDField({ ...genre });
  }

  async findOne(id: string) {
    const genre = await this.genresAPI.getById(id);

    return mapIDField({ ...genre });
  }

  async findAll() {
    const { items: genres } = await this.genresAPI.getAll();

    return genres.map((genre) => mapIDField({ ...genre }));
  }

  async update(updateGenreInput: UpdateGenreInput, token: string) {
    this.genresAPI.context.token = token;

    const genre = await this.genresAPI.update(
      updateGenreInput.id,
      updateGenreInput,
    );

    return mapIDField({ ...genre });
  }

  async delete(id: string, token: string) {
    this.genresAPI.context.token = token;

    return await this.genresAPI.remove(id);
  }
}
