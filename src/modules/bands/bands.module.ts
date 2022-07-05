import { BandsAPI } from './../../api/bands';
import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsResolver } from './bands.resolver';

@Module({
  providers: [BandsResolver, BandsService, BandsAPI],
})
export class BandsModule {}
