import { AlbumsService } from './../albums/albums.service';
import { GenresService } from './../genres/genres.service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { BandsService } from './../bands/bands.service';
import { ArtistsService } from './../artists/artists.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly albumsService: AlbumsService,
  ) {}

  @Mutation('createTrack')
  create(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context() ctx,
  ) {
    return this.tracksService.create(createTrackInput, ctx.token);
  }

  @Query('tracks')
  findAll() {
    return this.tracksService.findAll();
  }

  @Query('track')
  findOne(@Args('id') id: string) {
    return this.tracksService.findOne(id);
  }

  @Mutation('updateTrack')
  update(
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context() ctx,
  ) {
    return this.tracksService.update(updateTrackInput, ctx.token);
  }

  @Mutation('deleteTrack')
  delete(@Args('id') id: string, @Context() ctx) {
    return this.tracksService.remove(id, ctx.token);
  }

  @ResolveField('album')
  async getalbum(@Parent() track) {
    const { albumId } = track;

    return await this.albumsService.findOne(albumId);
  }

  @ResolveField('bands')
  async getBands(@Parent() track) {
    const { bandsIds } = track;

    return await Promise.all(
      bandsIds.map((id) => this.bandsService.findOne(id)),
    );
  }

  @ResolveField('artists')
  async getArtists(@Parent() track) {
    const { artistsIds } = track;

    return await Promise.all(
      artistsIds.map((id) => this.artistsService.findOne(id)),
    );
  }

  @ResolveField('genres')
  async getGenres(@Parent() track) {
    const { genresIds } = track;

    return await Promise.all(
      genresIds.map((id) => this.genresService.findOne(id)),
    );
  }
}
