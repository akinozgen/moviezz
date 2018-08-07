import * as React from "react";
import * as AutoComplete from "react-autocomplete";
import { API_CONFIG } from "../../config";
import "./index.css";

export default class Navbar extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);

    this.state = {
      searchBoxState: false,
      searchResults: [],
      searchValue: "",
    };

    this.toggleSearchInput = this.toggleSearchInput.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  public toggleSearchInput() {
    this.setState({ searchBoxState: !this.state.searchBoxState });
  }

  public onSearchInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    searchValue: string,
  ) {
    this.setState({ searchValue });
  }

  public search(e: any) {
    if (e.key !== "Enter") {
      return;
    }

    const response = fetch(
      `${API_CONFIG.apiurl}search/movie?api_key=${
        API_CONFIG.apikey
      }&language=tr-TR&query=${
        this.state.searchValue
      }&include_adult=true&&callback=test`,
    );
    // tslint:disable-next-line:no-console
    console.log(response);
  }

  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#!" className="navbar-brand">
          <img src="./popcorn.png" alt="" /> Moviezz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-md-auto">
            <div className="btn-group" role="group">
              <li
                className="nav-item btn btn-primary"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Ana Sayfa"
              >
                <a className="nav-link ">🏠</a>
              </li>
              <li
                className="nav-item btn btn-primary"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Giriş Yap"
              >
                <a className="nav-link">🙋</a>
              </li>
              <li
                className="nav-item btn btn-primary"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Kayıt Ol"
              >
                <a className="nav-link">🔑</a>
              </li>
              <li
                className="nav-item btn btn-warning"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Ara..."
              >
                <div
                  className={`form ${
                    this.state.searchBoxState ? "expanded" : "collapsed"
                  }`}
                >
                  <AutoComplete
                    getItemValue={item => item}
                    items={this.state.searchResults}
                    renderItem={(item, isHighlighted) => <div>{item}</div>}
                    value={this.state.searchValue}
                    onChange={this.onSearchInputChange}
                    onSelect={item => alert(item)}
                    inputProps={{
                      onKeyUp: this.search,
                      placeholder: "Ara.",
                    }}
                  />
                </div>
                <a className="nav-link" onClick={this.toggleSearchInput}>
                  🔍
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}
