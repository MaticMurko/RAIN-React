

function Photo({ photo }) {
    const date = new Date(photo.time);
    const formattedDate = date.toLocaleString("sl-SI", {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });


    return (
        <div className="card mb-4 shadow-sm">
            <img
                src={`http://localhost:3001/${photo.path}`}
                className="card-img-top"
                alt={photo.name}
                style={{ objectFit: 'cover', maxHeight: '400px' }}
            />
            <div className="card-body bg-light">
                <h5 className="card-title mb-1">{photo.name}</h5>
                <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                    {formattedDate}
                </p>
            </div>
        </div>
    );
}

export default Photo;
