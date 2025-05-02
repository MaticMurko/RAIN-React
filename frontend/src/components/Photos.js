import { useState, useEffect } from 'react';
import Photo from './Photo';

function Photos() {
    const [photos, setPhotos] = useState([]);

    const refreshPhotos = async () => {
        const res = await fetch("http://localhost:3001/photos");
        const data = await res.json();
        setPhotos(data);
    };

    useEffect(() => {
        refreshPhotos();
    }, []);

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Photos</h3>
            <ul className="p-0 m-0" style={{ listStyle: 'none' }}>
                {photos.map(photo => (
                    <li key={photo._id} className="mb-4">
                        <Photo photo={photo} refreshPhotos={refreshPhotos} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Photos;
