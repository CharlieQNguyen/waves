import { useState, useEffect } from "react"
import axios from 'axios'

function Artists() {
    const [artists, setArtists] = useState(null)

    useEffect(() => {
        const fetchArtists = async() => {
            const {data} = await axios.get("https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
        fetchArtists()
    }, [])

    return (
        <div>
            <h1>Artists</h1>
        </div>
    )
}
export default Artists