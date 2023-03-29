function ArtistCard({artist}) {
    return (
        <div className="card justify-content-center" style={{width: '10rem'}}>
            <img src={artist.images[0].url} alt={artist.name} className="rounded" />
            <div className="card-body">
                <h6 className="card-subtitle">{artist.name}</h6>
            </div>
        </div>
    )
}

export default ArtistCard