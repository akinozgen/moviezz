interface IMovieImageData {
  id: number;
  poster: string;
  backdrop: string;
}

class MovieImageData implements IMovieImageData {
  public id: number;
  public poster: string;
  public backdrop: string;

  constructor(id: number, poster: string, backdrop: string) {
    this.id = id;
    this.poster = poster;
    this.backdrop = backdrop;
  }
}

export default MovieImageData;
