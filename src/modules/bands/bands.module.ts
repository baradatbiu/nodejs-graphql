import { ArtistsAPI } from './../../api/artists';
import { GenresAPI } from './../../api/genres';
import { BandsAPI } from './../../api/bands';
import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsResolver } from './bands.resolver';

@Module({
  providers: [BandsResolver, BandsService, BandsAPI, GenresAPI, ArtistsAPI],
})
export class BandsModule {}
