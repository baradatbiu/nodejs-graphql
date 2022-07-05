import { GenresAPI } from '../../api/genres';
import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresResolver } from './genres.resolver';

@Module({
  providers: [GenresResolver, GenresService, GenresAPI],
})
export class GenresModule {}
