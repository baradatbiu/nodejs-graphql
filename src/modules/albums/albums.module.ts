import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';
import { AlbumsAPI } from 'src/api/albums';

@Module({
  providers: [AlbumsResolver, AlbumsService, AlbumsAPI],
})
export class AlbumsModule {}
