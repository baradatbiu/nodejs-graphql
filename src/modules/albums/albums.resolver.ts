import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { GenresService } from './../genres/genres.service';
import { BandsService } from './../bands/bands.service';
import { ArtistsService } from './../artists/artists.service';
import { TracksService } from './../tracks/tracks.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly tracksService: TracksService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}

  @Mutation('createAlbum')
  create(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context() ctx,
  ) {
    return this.albumsService.create(createAlbumInput, ctx.token);
  }

  @Query('albums')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.albumsService.findAll(limit, offset);
  }

  @Query('album')
  findOne(@Args('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Mutation('updateAlbum')
  update(
    @Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput,
    @Context() ctx,
  ) {
    return this.albumsService.update(updateAlbumInput, ctx.token);
  }

  @Mutation('deleteAlbum')
  delete(@Args('id') id: string, @Context() ctx) {
    return this.albumsService.remove(id, ctx.token);
  }

  @ResolveField('bands')
  async getBands(@Parent() album) {
    const { bandsIds } = album;

    return await Promise.all(
      bandsIds.map((id) => this.bandsService.findOne(id)),
    );
  }

  @ResolveField('artists')
  async getArtists(@Parent() album) {
    const { artistsIds } = album;

    return await Promise.all(
      artistsIds.map((id) => this.artistsService.findOne(id)),
    );
  }

  @ResolveField('genres')
  async getGenres(@Parent() album) {
    const { genresIds } = album;

    return await Promise.all(
      genresIds.map((id) => this.genresService.findOne(id)),
    );
  }

  @ResolveField('tracks')
  async getTracks(@Parent() album) {
    const { trackIds } = album;

    return await Promise.all(
      trackIds.map((id) => this.tracksService.findOne(id)),
    );
  }
}
