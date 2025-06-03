import { Episode } from './entity/episode.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';
export declare class EpisodesService {
    private episodes;
    findAll(sort?: 'asc' | 'desc'): Promise<Episode[]>;
    findFeatured(): Promise<Episode[]>;
    findOne(id: string): Promise<Episode | undefined>;
    create(createEpisodeDto: CreateEpisodeDto): Promise<Episode>;
}
