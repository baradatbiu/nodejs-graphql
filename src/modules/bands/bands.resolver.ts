import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { BandsService } from './bands.service';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Mutation('createBand')
  create(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context() ctx,
  ) {
    return this.bandsService.create(createBandInput, ctx.token);
  }

  @Query('bands')
  findAll() {
    return this.bandsService.findAll();
  }

  @Query('band')
  findOne(@Args('id') id: string) {
    return this.bandsService.findOne(id);
  }

  @Mutation('updateBand')
  update(
    @Args('updateBandInput') updateBandInput: UpdateBandInput,
    @Context() ctx,
  ) {
    return this.bandsService.update(updateBandInput, ctx.token);
  }

  @Mutation('deleteBand')
  delete(@Args('id') id: string, @Context() ctx) {
    return this.bandsService.delete(id, ctx.token);
  }
}
