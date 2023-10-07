import { Link } from "react-router-dom";
import { BsEye, BsShare, BsFillSaveFill } from 'react-icons/bs'


const Newcard = ({ news }) => {
    const { title, image_url, details, _id, rating, total_view, author } = news;
    return (

        <div className="card  bg-base-100 bordered">
            <div className="flex items-center gap-6 p-2 bordered bg-[#F3F3F3] rounded-lg">
                <img className="w-[40px] h-[40px] rounded-full" src={author.img} alt="" />
                <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
                <div className="flex gap-5 ml-56">
                    <BsFillSaveFill></BsFillSaveFill>
                    <BsShare></BsShare>
                </div>
            </div>
            <h2 className="card-title mt-2 p-3">{title}</h2>
            <figure><img className="p-5" src={image_url} alt="" /></figure>
            <div className="card-body ">
                {
                    details.length > 200
                        ?
                        <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-red-500 font-bold ml-4"><br /> Read More..</Link></p>
                        :
                        <p>{details}</p>
                }
                <div className="flex">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p>{rating.number}</p>
                    <div className="flex items-center gap-2">
                        <BsEye></BsEye>
                        <p>{total_view}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Newcard;