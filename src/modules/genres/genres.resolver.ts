import { UpdateGenreInput } from 'src/modules/genres/dto/update-genre.input';
import { CreateGenreInput } from 'src/modules/genres/dto/create-genre.input';
import { GenresService } from './genres.service';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';

@Resolver('User')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Mutation('createGenre')
  create(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
    @Context() ctx,
  ) {
    return this.genresService.create(createGenreInput, ctx.token);
  }

  @Mutation('updateGenre')
  update(
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    @Context() ctx,
  ) {
    return this.genresService.update(updateGenreInput, ctx.token);
  }

  @Mutation('deleteGenre')
  delete(@Args('id') id: string, @Context() ctx) {
    return this.genresService.remove(id, ctx.token);
  }

  @Query('genre')
  findOne(@Args('id') id: string) {
    return this.genresService.findOne(id);
  }

  @Query('genres')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.genresService.findAll(limit, offset);
  }
}
