import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';

@Resolver('Album')
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Mutation('createAlbum')
  create(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context() ctx,
  ) {
    return this.albumsService.create(createAlbumInput, ctx.token);
  }

  @Query('albums')
  findAll() {
    return this.albumsService.findAll();
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
    return this.albumsService.delete(id, ctx.token);
  }
}
