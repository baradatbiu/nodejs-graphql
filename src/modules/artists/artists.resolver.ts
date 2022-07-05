import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ArtistsService } from './artists.service';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Mutation('createArtist')
  create(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context() ctx,
  ) {
    return this.artistsService.create(createArtistInput, ctx.token);
  }

  @Query('artists')
  findAll() {
    return this.artistsService.findAll();
  }

  @Query('artist')
  findOne(@Args('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Mutation('updateArtist')
  update(
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
    @Context() ctx,
  ) {
    return this.artistsService.update(updateArtistInput, ctx.token);
  }

  @Mutation('deleteArtist')
  delete(@Args('id') id: string, @Context() ctx) {
    return this.artistsService.delete(id, ctx.token);
  }
}
