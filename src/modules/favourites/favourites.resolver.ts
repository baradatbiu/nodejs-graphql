import { GenresService } from './../genres/genres.service';
import { BandsService } from './../bands/bands.service';
import { ArtistsService } from './../artists/artists.service';
import { TracksService } from './../tracks/tracks.service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';

@Resolver('Favourite')
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly tracksService: TracksService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}

  @Query('favourites')
  findAll(@Context() ctx) {
    return this.favouritesService.findAll(ctx.token);
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

  @ResolveField('bands')
  async getBands(@Parent() favourite) {
    const { bandsIds } = favourite;

    return await Promise.all(
      bandsIds.map((id) => this.bandsService.findOne(id)),
    );
  }

  @ResolveField('artists')
  async getArtists(@Parent() favourite) {
    const { artistsIds } = favourite;

    return await Promise.all(
      artistsIds.map((id) => this.artistsService.findOne(id)),
    );
  }

  @ResolveField('genres')
  async getGenres(@Parent() favourite) {
    const { genresIds } = favourite;

    return await Promise.all(
      genresIds.map((id) => this.genresService.findOne(id)),
    );
  }

  @ResolveField('tracks')
  async getTracks(@Parent() favourite) {
    const { tracksIds } = favourite;

    return await Promise.all(
      tracksIds.map((id) => this.tracksService.findOne(id)),
    );
  }
}
