import SongsCard from "./SongsCard";

function Songs() {
  return (
    <div className="songs">
      <section>
        <h2
          className="text-center
        "
        >
          Songs 2023
          <SongsCard />
        </h2>
        <p>Most popular songs of 2023</p>
      </section>
      <section>
        <h2>Songs 2022</h2>
      </section>
    </div>
  );
}

export default Songs;
