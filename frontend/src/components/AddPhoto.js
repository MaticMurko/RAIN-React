import { useContext, useState } from 'react'
import { Navigate } from 'react-router';
import { UserContext } from '../userContext';

function AddPhoto(props) {
    const userContext = useContext(UserContext); 
    const[name, setName] = useState('');
    const[file, setFile] = useState('');
    const[uploaded, setUploaded] = useState(false);

    async function onSubmit(e){
        e.preventDefault();

        if(!name){
            alert("Vnesite ime!");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', file);
        const res = await fetch('http://localhost:3001/photos', {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        const data = await res.json();

        setUploaded(true);
    }

    return (
        <form className="p-4 bg-light rounded shadow-sm" onSubmit={onSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h4 className="mb-3">Upload a New Photo</h4>
            
            <div className="mb-3">
                <label htmlFor="photoName" className="form-label">Photo Name</label>
                <input
                    type="text"
                    id="photoName"
                    className="form-control"
                    name="ime"
                    placeholder="Enter photo name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="file" className="form-label">Select Image File</label>
                <input
                    className="form-control"
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Upload
            </button>
        </form>
    );
}

export default AddPhoto;