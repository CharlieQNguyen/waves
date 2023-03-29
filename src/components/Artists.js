import { useState, useEffect } from "react"
import axios from "axios"
import ArtistCard from "./ArtistCard"

function Artists() {
    const [fetchError, setFetchError] = useState(null)
    const [artists, setArtists] = useState([])
    const [relatedArtists, setRelatedArtists] = useState([])

    const artistId = "2CIMQHirSU0MQqyYHq0eOx,43ZHCT0cAZBISjO8DG9PnE,1vCWHaC5f2uS3yhpwWbIA6,06HL4z0CvFAxyc27GXpf02,70kkdajctXSbqSMJbQO424,6vWDO969PvNqNYHIOW5v0m,6eUKZXaKkcviH0Ku9w2n3V"
    const relatedArtistId = "06HL4z0CvFAxyc27GXpf02"

    // get artist info from Spotify API
    useEffect(() => {
        let token = window.localStorage.getItem("token")

        // get list of artists
        const fetchArtists = async() => {
            try {
                const {data} = await axios.get(`https://api.spotify.com/v1/artists?ids=${artistId}`, {
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

        // get list of related artists
        const fetchRelatedArtists = async() => {
            try {
                const {data} = await axios.get(`https://api.spotify.com/v1/artists/${relatedArtistId}/related-artists`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setRelatedArtists(data.artists)
                setFetchError(null)
            }
            catch(error) {
                setFetchError(error.message)
                setRelatedArtists(null)
            }
        }

        fetchArtists()
        fetchRelatedArtists()
    }, [])

    return (
        <div className="container">
            <h4>Artists</h4>

            {/* if error when fetching data */}
            {fetchError && (<p>{fetchError}</p>)}

            {/* display artists */}
            <section className="mb-5">
                {artists &&
                    <div className="d-flex flex-wrap justify-content-center align-items-center align-items-lg-stretch flex-column flex-lg-row gap-3">
                        {artists.map(artist => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </div>
                }
            </section>

            {/* display related artists */}
            <section>
                <h4>Related Artists</h4>
                {relatedArtists &&
                    <div className="d-flex flex-wrap justify-content-center align-items-center align-items-lg-stretch flex-column flex-lg-row gap-3">
                        {relatedArtists.slice(0, 7).map(artist => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </div>
                }
            </section>
        </div>
    )
}
export default Artists