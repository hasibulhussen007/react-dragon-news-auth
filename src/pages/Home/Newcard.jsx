import { Link } from "react-router-dom";


const Newcard = ({ news }) => {
    const {title,image_url,details,_id,rating,total_view} = news;
    return (
        <div className="card  bg-base-100 shadow-xl">
             <h2 className="card-title">{title}</h2>
            <figure><img src={image_url} alt="" /></figure>
            <div className="card-body ">
               {
                details.length > 200
                ?
                <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-red-500 font-bold ml-4">Read More..</Link></p>
                : 
                <p>{details}</p>
               }
                <div className="flex justify-between items-center">
                    <p>{rating.number}</p>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default Newcard;