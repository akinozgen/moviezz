import * as React from "react";
import "./index.css";
import { API_CONFIG } from "../../config";
import MovieData from "./types";

export default class MoviePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      id: props.match.params.id,
      movieData: {},
    };

    this.getMovieData = this.getMovieData.bind(this);
  }

  public componentDidMount() {
    this.getMovieData();
  }

  public getMovieData() {
    fetch(
      `${API_CONFIG.apiurl}movie/${this.state.id}?api_key=${API_CONFIG.apikey}`,
    )
      .then(response => response.json())
      .then(response => {
        const movieData: MovieData = new MovieData(response);
        this.setState({ movieData });

        const backdrop = document.getElementById("backdrop");

        if (backdrop) {
          backdrop.style.backgroundImage = `url(${API_CONFIG.posterpath}${
            movieData.backdrop_path
          })`;
        }
      })
      .then(() => console.log(this.state));
  }

  public render() {
    const data: MovieData = this.state.movieData;

    return (
      <div className="movie">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                {data.title} <small>({data.original_title})</small>
              </h1>
              <p className="tagline">{data.tagline}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="poster-holder">
                <img
                  src={`${API_CONFIG.posterpath}${data.poster_path}`}
                  alt=""
                  className="poster"
                />
              </div>
            </div>

            <div className="col-md-9 col-sm-8 col-xs-12">
              <p>
                <span className="badge badge-success year">2018</span>
              </p>
              <p className="genres">
                <span className="badge badge-danger">Action</span>
                <span className="badge badge-warning">Adventure</span>
                <span className="badge badge-primary">Sci-Fi</span>
              </p>
              <p className="rating">
                <span className="emoji">⭐</span>
                <span className="emoji">⭐</span>
                <span className="emoji">⭐</span>
                <span className="emoji">⭐</span>
                <span className="emoji">⭐</span>
                <span className="emoji">⭐</span>
                <span className="emoji disabled">⭐</span>
                <span className="emoji disabled">⭐</span>
                <span className="emoji disabled">⭐</span>
                <span className="emoji disabled">⭐</span>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.imdb.com/title/123465xxxxxx/"
                  className="imdb"
                >
                  <img
                    width="30"
                    src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/IMDb-icon.png"
                    alt=""
                  />
                </a>
              </p>
              <p className="plot">
                Overview: Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Porro veniam tempora, nulla debitis ratione nesciunt ut ea
                placeat cupiditate hic incidunt ipsam. Voluptas labore harum,
                voluptatum eum dolorem libero officiis.
              </p>
            </div>
          </div>

          <div className="row similar-title">
            <div className="col-md-12">
              <h3>Similar Movies</h3>
            </div>
          </div>

          <div className="row similar">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <a href="#!">
                <img
                  src="http://placehold.it/250x325?text=P O S T E R"
                  alt=""
                  className="poster"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <a href="#!">
                <img
                  src="http://placehold.it/250x325?text=P O S T E R"
                  alt=""
                  className="poster"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <a href="#!">
                <img
                  src="http://placehold.it/250x325?text=P O S T E R"
                  alt=""
                  className="poster"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <a href="#!">
                <img
                  src="http://placehold.it/250x325?text=P O S T E R"
                  alt=""
                  className="poster"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
