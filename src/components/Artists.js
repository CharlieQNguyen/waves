import { useState, useEffect } from "react"
import axios from "axios"

function Artists() {
    const [fetchError, setFetchError] = useState(null)
    const [artists, setArtists] = useState([])

    useEffect(() => {
        let token = window.localStorage.getItem("token")

        const fetchArtists = async() => {
            try {
                const { data } = await axios.get("https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setArtists(data)
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
        <div>
            <h1>Artists</h1>
            {fetchError && (<p>{fetchError}</p>)}
            {/* {artists && (<p>Artists fetched</p>)} */}
            {artists && <p>{artists.name}</p>}
        </div>
    )
}
export default Artists