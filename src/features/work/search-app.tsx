import { useState } from "react";
import Container from "../../components/container";
import Button from "../../components/button";
import song from "./../../assets/casual-life-3d-man-searching-music-with-phone.png";
import { Link } from "react-router-dom";

type SearchResult = {
  trackName: string;
  artistName: string;
  artistViewUrl: string;
  artworkUrl100: string;
  country: string;
  previewUrl: string;
  primaryGenreName: string;
};

const SearchApp = () => {
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = (term: string) => {
    fetch(`https://itunes.apple.com/search?term=${term}&entity=song`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setSearchResults(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("There was an error fetching data.");
        setSearchResults(null);
        setIsLoading(false);
      });
  };

  return (
    <Container size="lg">
      <h2>Search App</h2>
      <div className="song">
        <img className="song__img" src={song} alt="Song icon" />
        <header className="song__input__wrapper">
          <input
            className="song__input"
            placeholder="Enter a song name"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            color="blue"
            text="Search"
            onClick={() => {
              setIsLoading(true);
              setError("");
              fetchData(searchTerm);
            }}
          ></Button>
        </header>
        <main className="song__grid">
          {isLoading ? (
            <div>Loading...</div>
          ) : searchResults && searchResults.length > 0 ? (
            searchResults.map((result, index) => {
              return (
                <div key={index} className="song__card">
                  <img
                    className="song__card__img"
                    src={result.artworkUrl100}
                    alt={`${result.artistName} - ${result.trackName}`}
                  />
                  <section className="song__card__body">
                    <Link
                      to={result.artistViewUrl}
                      target={"_blank"}
                      className="song__card__name"
                    >
                      {result.artistName} - {result.trackName}
                    </Link>
                    <div className="song__card__genere">
                      {result.primaryGenreName}
                    </div>
                  </section>
                  <audio controls>
                    <source src={result.previewUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              );
            })
          ) : null}
          {error && !isLoading && searchResults === null && (
            <div>No results</div>
          )}
        </main>
      </div>
    </Container>
  );
};

export default SearchApp;
