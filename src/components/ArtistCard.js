function ArtistCard({artist}) {
    return (
        <div className="card justify-content-center" style={{width: '10rem'}}>
            <img src={artist.images[0].url} alt={artist.name} className="rounded" />
            <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
            </div>
        </div>
    )
}

export default ArtistCard