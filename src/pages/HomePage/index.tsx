import * as React from "react";
import { API_CONFIG } from "../../config";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import MovieImageData from "./types";

export default class HomePage extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);

    this.state = {
      images: [
        {
          backdrop:
            "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
          poster:
            "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        },
      ],
    };

    this.getMovies = this.getMovies.bind(this);
  }

  public componentDidMount() {
    this.getMovies();
  }

  public async getMovies() {
    fetch(`${API_CONFIG.apiurl}movie/top_rated?api_key=${API_CONFIG.apikey}`)
      .then(response => response.json())
      .then(response => {
        const imagesData: MovieImageData[] = response.results.map(
          (result: any) => {
            return {
              id: result.id,
              backdrop: `${API_CONFIG.posterpath}${result.backdrop_path}`,
              poster: `${API_CONFIG.posterpath}${result.poster_path}`,
            };
          },
        );
        console.log(imagesData);
        this.setState({ images: imagesData });
      });
  }

  public render() {
    return (
      <div>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          dynamicHeight={true}
          emulateTouch={true}
          stopOnHover={true}
        >
          {this.state.images.map((img: MovieImageData) => (
            <div className="slideHolder">
              <Link to={`/movie/${img.id}`}>
                <div
                  className="slideBg"
                  style={{ backgroundImage: `url('${img.backdrop}')` }}
                />
                <img src={img.poster} alt="" />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
