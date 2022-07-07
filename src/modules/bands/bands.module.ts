import { ArtistsService } from './../artists/artists.service';
import { GenresService } from './../genres/genres.service';
import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsResolver } from './bands.resolver';

@Module({
  providers: [BandsResolver, BandsService, GenresService, ArtistsService],
})
export class BandsModule {}
