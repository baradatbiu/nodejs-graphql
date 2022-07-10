import { Module } from '@nestjs/common';
import { GenresService } from './../genres/genres.service';
import { BandsService } from './../bands/bands.service';
import { ArtistsService } from './../artists/artists.service';
import { TracksService } from './../tracks/tracks.service';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';

@Module({
  providers: [
    FavouritesResolver,
    FavouritesService,
    TracksService,
    ArtistsService,
    BandsService,
    GenresService,
  ],
})
export class FavouritesModule {}
