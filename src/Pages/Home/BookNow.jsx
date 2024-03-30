import { LocationOn, PhoneInTalk } from "@mui/icons-material";

const BookNow = () => {
    return (
        <div className='bg-[#07332F] mx-auto flex items-center rounded-md w-4/5 text-white mt-20 mb-32 p-10'>
            <div className="w-1/2">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam remaperiam,  <br /> eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <div className="flex rounded-md gap-6 px-8 mt-10">
                    <LocationOn />
                    <div>
                        <h3 className="font-bold">Our Location</h3>
                        <p>
                            Dhanmondi 17, Dhaka -1200,
                            <br /> Bangladesh
                        </p>
                    </div>
                </div>
                <div className="flex rounded-md gap-6 px-8 py-6 bg-[#07332F]">
                    <PhoneInTalk />
                    <div>
                        <h3 className="font-bold">Contact Us</h3>
                        <p>
                            +88 01750 00 00 00 <br />
                            +88 01750 00 00 00
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-black w-1/2">
                <input className="border-none outline-none rounded-lg px-2 py-2 ml-4 bg-gray-50 " type="text" name="name" placeholder="Name" />
                <input className="border-none outline-none rounded-lg px-2 py-2 ml-4 bg-gray-50 " type="email" name="email" placeholder="Email" /> <br /> <br />
                <input className="border-none outline-none rounded-lg px-2 py-2 ml-4 bg-gray-50 " type="number" name="number" placeholder="Mobile Number" />
                <input className="border-none outline-none rounded-lg px-2 py-2 ml-4 bg-gray-50 " type="email" name="doctor" placeholder="Doctor Name" /> <br /> <br />
                <input className="border-none w-[200px] outline-none rounded-lg px-2 py-2 ml-4 bg-gray-50 " type="date" name="" id="" /> <input className="border-none w-[190px] outline-none rounded-lg px-2 py-2 ml-4 bg-gray-50 " type="time" name="" id="" />
                <button className="btn w-[410px] mt-4 ml-4 hover:bg-[#30336b] outline-none border-0 text-white font-bold bg-[#130f40] mb-1">Book Now</button>
            </div>
        </div>
    );
};

export default BookNow;