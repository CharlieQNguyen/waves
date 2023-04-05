import React from "react";
import "./Styles.css";

function PopSongsPage() {
  return (
    <div>
      <h1>Top Songs</h1>
      <div className="song-list">
        <div className="song-card">
          <img
            src="https://www.musicmundial.com/en/wp-content/uploads/2022/03/Dua-Lipa-is-sued-for-alleged-plagiarism-Levitating.jpg"
            alt="Dua Lipa - Levitating"
          />
          <h2>Dua Lipa - Levitating</h2>
          <p>
            Levitating is a song by English singer Dua Lipa from her second
            studio album, Future Nostalgia (2020).
            <button>Listen</button>
          </p>
        </div>
        <div className="song-card">
          <img
            src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
            alt="The Weeknd - Blinding Lights"
          />
          <h2>The Weeknd - Blinding Lights</h2>
          <p>
            Blinding Lights is a song by Canadian singer The Weeknd, released as
            the lead single from his fourth studio album, After Hours (2020).
          </p>
        </div>
        <div className="song-card">
          <img
            src="https://pyxis.nymag.com/v1/imgs/848/851/4305fb42b7d9f5533ac9b8cb054c42f500-ariana-grande-album-review.rsquare.w700.jpg"
            alt="Ariana Grande - positions"
          />
          <h2>Ariana Grande - positions</h2>
          <p>
            Positions is a song by American singer Ariana Grande, released as
            the lead single from her sixth studio album of the same name (2020).
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopSongsPage;
