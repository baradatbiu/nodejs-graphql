import { AlbumsService } from './../albums/albums.service';
import { ArtistsService } from './../artists/artists.service';
import { BandsService } from './../bands/bands.service';
import { GenresService } from './../genres/genres.service';
import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.resolver';

@Module({
  providers: [
    TracksResolver,
    TracksService,
    GenresService,
    BandsService,
    ArtistsService,
    AlbumsService,
  ],
})
export class TracksModule {}
