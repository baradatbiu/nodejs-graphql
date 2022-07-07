import { GenresService } from './../genres/genres.service';
import { BandsService } from './../bands/bands.service';
import { ArtistsService } from './../artists/artists.service';
import { TracksService } from './../tracks/tracks.service';
import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';

@Module({
  providers: [
    AlbumsResolver,
    AlbumsService,
    TracksService,
    ArtistsService,
    BandsService,
    GenresService,
  ],
})
export class AlbumsModule {}
