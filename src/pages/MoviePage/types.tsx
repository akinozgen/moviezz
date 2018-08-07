class MovieData implements IMovieData {
  public poster_path?: string | null | undefined;
  public adult?: boolean | undefined;
  public overview?: string | undefined;
  public release_date?: string | undefined;
  public genre_ids?: number[] | undefined;
  public id: number;
  public original_title?: string | undefined;
  public original_language?: string | undefined;
  public title?: string | undefined;
  public backdrop_path?: string | null | undefined;
  public popularity?: number | undefined;
  public vote_count?: number | undefined;
  public video?: boolean | undefined;
  public vote_average?: number | undefined;
  public budget?: number | undefined;
  public imdb_id?: number | undefined;
  public production_companies?:
    | Array<{
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }>
    | undefined;
  public production_countries?: Array<{ name: string }> | undefined;
  public status?: string;
  public tagline?: string;

  constructor(data: IMovieData) {
    this.id = data.id;
    this.poster_path = data.poster_path;
    this.adult = data.adult;
    this.overview = data.overview;
    this.release_date = data.release_date;
    this.genre_ids = data.genre_ids;
    this.original_title = data.original_title;
    this.title = data.title;
    this.original_language = data.original_language;
    this.backdrop_path = data.backdrop_path;
    this.popularity = data.popularity;
    this.vote_average = data.vote_average;
    this.vote_count = data.vote_count;
    this.video = data.video;
    this.budget = data.budget;
    this.production_companies = data.production_companies;
    this.production_countries = data.production_countries;
    this.status = data.status;
    this.tagline = data.tagline;
    this.imdb_id = data.imdb_id;
  }
}

interface IMovieData {
  poster_path?: string | null | undefined;
  adult?: boolean | undefined;
  overview?: string | undefined;
  release_date?: string | undefined;
  genre_ids?: number[] | undefined;
  id: number;
  original_title?: string | undefined;
  original_language?: string | undefined;
  title?: string | undefined;
  backdrop_path?: string | null | undefined;
  popularity?: number | undefined;
  vote_count?: number | undefined;
  video?: boolean | undefined;
  vote_average?: number | undefined;
  budget?: number | undefined;
  imdb_id?: number | undefined;
  production_companies?:
    | Array<{
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }>
    | undefined;
  production_countries?: Array<{ name: string }> | undefined;
  status?: string;
  tagline?: string;
}

export default MovieData;
