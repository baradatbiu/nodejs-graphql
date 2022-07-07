import { mapIDField } from './../../utils/mapObjectFields';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BandsService } from './bands.service';
import { ArtistsService } from './../artists/artists.service';
import { GenresService } from './../genres/genres.service';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
  ) {}

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
    return this.bandsService.remove(id, ctx.token);
  }

  @ResolveField('genres')
  async getGenres(@Parent() band) {
    const { genresIds } = band;

    return await Promise.all(
      genresIds.map((id) => this.genresService.findOne(id)),
    );
  }

  @ResolveField('members')
  async getMembers(@Parent() band) {
    const { members } = band;

    const artists = await Promise.all(
      members.map(({ artist }) => this.artistsService.findOne(artist)),
    );

    return artists.map((artist, index) => ({
      ...artist,
      instrument: members[index].instrument,
      years: members[index].years,
    }));
  }
}
