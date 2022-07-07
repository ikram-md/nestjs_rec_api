import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie as MovieEntity } from 'src/typeorm/entities/Movie';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieEntity: Repository<MovieEntity>,
  ) {}
  /**
   * Fetch all the movies in the database
   */
  async getAllMovies() {
    const allMovies = await this.movieEntity.find({});
    if (allMovies) return allMovies;
    return null;
  }
}
