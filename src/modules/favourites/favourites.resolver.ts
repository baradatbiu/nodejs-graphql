import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';

@Resolver('Favourite')
export class FavouritesResolver {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Query('favourites')
  findAll() {
    return this.favouritesService.findAll();
  }

  @Mutation('addTrackToFavourites')
  addTrackToFavourites(@Args('id') id: string, @Context() ctx) {
    return this.favouritesService.add({ id, type: 'tracks' }, ctx.token);
  }

  @Mutation('addBandToFavourites')
  addBandToFavourites(@Args('id') id: string, @Context() ctx) {
    return this.favouritesService.add({ id, type: 'bands' }, ctx.token);
  }

  @Mutation('addArtistToFavourites')
  addArtistToFavourites(@Args('id') id: string, @Context() ctx) {
    return this.favouritesService.add({ id, type: 'artists' }, ctx.token);
  }

  @Mutation('addGenreToFavourites')
  addGenreToFavourites(@Args('id') id: string, @Context() ctx) {
    return this.favouritesService.add({ id, type: 'genres' }, ctx.token);
  }
}
