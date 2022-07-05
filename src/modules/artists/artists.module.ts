import { ArtistsAPI } from './../../api/artists';
import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsResolver } from './artists.resolver';

@Module({
  providers: [ArtistsResolver, ArtistsService, ArtistsAPI],
})
export class ArtistsModule {}
