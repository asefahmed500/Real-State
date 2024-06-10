import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Separate API function
const fetchEstateById = async (id) => {
    const response = await fetch('/estates.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Convert the id to a string to ensure matching
    return data.find(estate => estate.id === id);
};

const Estate = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getEstate = async () => {
            try {
                const data = await fetchEstateById(id);
                if (data) {
                    setEstate(data);
                } else {
                    setError('Estate not found');
                }
            } catch (err) {
                console.error(err); // Log the actual error
                setError('Failed to fetch estate details');
            } finally {
                setLoading(false);
            }
        };
        getEstate();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (!estate) return <div>No estate found</div>;

    const { estate_title, image, description, price, facilities } = estate;

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p className="font-bold">{price}</p>
                    <p>Facilities:</p>
                    <ul>
                        {facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Estate;
