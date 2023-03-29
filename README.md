1. Clone the repo.

2. Make a copy of `.env.example` file and rename it `.env`.

3. Log in to [Spotify for Developers](https://developer.spotify.com/dashboard). If no app has been created, create one:

    1. Click **Create app**.
  
    2. Enter an **App name**, **App description**, and enter `http://localhost:3000` for **Redirect URI**.
 
4. Click on the app and then click **Settings**.

5. Copy the **Client ID** and **Client secret** and add them to the `.env` file.
```
REACT_APP_SPOTIFY_CLIENT_ID=Client ID
REACT_APP_SPOTIFY_CLIENT_SECRET=Client secret
REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000
REACT_APP_SPOTIFY_AUTH_ENDPOINT=https://accounts.spotify.com/authorize
REACT_APP_SPOTIFY_RESPONSE_TYPE=token
```

6. `npm i` or `npm install`

7. `npm start` or `npm run start`

8. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
