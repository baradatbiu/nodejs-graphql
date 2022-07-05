import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';

@Resolver('Track')
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Mutation('createTrack')
  create(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context() ctx,
  ) {
    return this.tracksService.create(createTrackInput, ctx.token);
  }

  @Query('tracks')
  findAll() {
    return this.tracksService.findAll();
  }

  @Query('track')
  findOne(@Args('id') id: string) {
    return this.tracksService.findOne(id);
  }

  @Mutation('updateTrack')
  update(
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context() ctx,
  ) {
    return this.tracksService.update(updateTrackInput, ctx.token);
  }

  @Mutation('deleteTrack')
  delete(@Args('id') id: string, @Context() ctx) {
    return this.tracksService.delete(id, ctx.token);
  }
}
