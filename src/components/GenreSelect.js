import React from "react";

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div className="genre-select">
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === selectedGenre ? "selected" : ""}
          onClick={() => genre !== selectedGenre && onSelect(genre)}
          aria-pressed={genre === selectedGenre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelect;
