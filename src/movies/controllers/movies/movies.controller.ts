import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { MoviesService } from 'src/movies/services/movies/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(
    @Inject('MOVIES_SERVICE') private readonly movieService: MoviesService,
  ) {}

  @Get('all')
  async getAllMovies() {
    const data = await this.movieService.getAllMovies();
    if (data === null)
      return new HttpException('No movies were found', HttpStatus.BAD_REQUEST);
    else {
      return data;
    }
  }
}
