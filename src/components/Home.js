function Home() {
  return (
    <div>
      <h1>Welcome to Waves Music App</h1>
      <p>Please log in to explore the world of music with Waves!</p>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Log In</button>
      </form>
      <div id="links" style="display: none">
        <h2>Explore Waves Music App</h2>
        <ul>
          <li>
            <a href="/genres">Genres</a>
          </li>
          <li>
            <a href="/albums">Albums</a>
          </li>
          <li>
            <a href="/songs">Songs</a>
          </li>
          <li>
            <a href="/artists">Artists</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
