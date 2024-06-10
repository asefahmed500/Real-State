import { Link } from "react-router-dom";


const Estates = ({ estates }) => {
    const { estate_title, image, description, price, id } = estates;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <p className="font-bold">{price}</p>
               

                <div className="card-actions justify-end">
                    <Link to={`/estates/${id}`}>

                        <button className="btn btn-primary">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Estates;