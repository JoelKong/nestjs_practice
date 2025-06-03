import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ConfigService } from 'src/config/config.service';
import { IsPositivePipe } from './pipes/is-positive.pipe';
import { ApiKeyGuard } from 'src/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('episodes')
export class EpisodesController {
  constructor(
    private readonly episodesService: EpisodesService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe)
    limit: number,
  ) {
    return this.episodesService.findAll(sort);
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured();
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    const episode = await this.episodesService.findOne(id);
    if (!episode) {
      throw new NotFoundException(`Episode with id ${id} not found`);
    }
    return episode;
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    return this.episodesService.create(input);
  }
}
