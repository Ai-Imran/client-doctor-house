import { Rating } from "@smastrom/react-rating";
import { useState, useEffect } from "react";
import '@smastrom/react-rating/style.css'
import { CalendarToday, CurrencyBitcoin, LocationOn, Money } from "@mui/icons-material";

const ExpertDoctors = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch('expert.json')
      .then(res => res.json())
      .then(data => setExperts(data))
  }, []);
  return (
    <div>
      <div className="text-center my-16 space-y-5">
        <h2 className="text-3xl font-bold">Our Expert Doctors</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, <br /> eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      <div className="lg:flex md:px-20 space-y-3 justify-center gap-6 my-16">
        {
          experts.map(expert => <div key={expert._id} className="card  card-compact bg-base-100 px-1 border border-lime-500">
            <figure><img className="object-contain pt-2 rounded-md h-[300px] w-[350px]" src={expert.image} alt="Doctor" /></figure>
            <div className="card-body">
              <h2 className="card-title">{expert.name}</h2>
              <p>{expert.doctor_category}</p>
             <div >
             <Rating 
                style={{ maxWidth: 120 }}
                value={expert.rating}
                readOnly
              />
             </div>
             <div className="mt-10 space-y-4">
              <span className="mb-2"> <LocationOn/> {expert.location} </span> <br />
              <span><CalendarToday/> {expert.available_date} </span> <br />
              <span><Money/> {expert.price} </span>
             </div>
              <div className="card-actions ">
              <button className="btn btn-block hover:bg-[#30336b] outline-none border-0 text-white font-bold bg-[#130f40] mb-1">View Profile</button>

              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default ExpertDoctors;