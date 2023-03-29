import { useState, useEffect } from "react"
import axios from "axios"
import ArtistCard from "./ArtistCard"

function Artists() {
    const [fetchError, setFetchError] = useState(null)
    const [artists, setArtists] = useState([])

    // get artist info from Spotify API
    useEffect(() => {
        let token = window.localStorage.getItem("token")

        const fetchArtists = async() => {
            try {
                const { data } = await axios.get("https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setArtists(data.artists)
                setFetchError(null)
            }
            catch(error) {
                setFetchError(error.message)
                setArtists(null)
            }
        }
        fetchArtists()
    }, [])

    return (
        <div className="container">
            <h1>Artists</h1>

            {/* if error when fetching data */}
            {fetchError && (<p>{fetchError}</p>)}

            {/* display artists if data successfully fetched */}
            <section>
                {artists &&
                    <div className="d-flex justify-content-center align-items-center align-items-lg-stretch flex-column flex-lg-row gap-3">
                        {artists.map(artist => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </div>
                }
            </section>
        </div>
    )
}
export default Artists