import { LocationOn, PhoneInTalk, WatchLater } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <div className=" my-20 text-white md:px-3 flex justify-center gap-8">
      <div className=" lg:flex rounded-md gap-6 px-8 py-6 bg-[#07332F]">
        <WatchLater />
        <div>
          <h3 className="font-bold">Opeaning Hours</h3>
          <p>
            Open 9.00 am to 5.00pm <br /> Everyday
          </p>
        </div>
      </div>
      <div className="lg:flex rounded-md gap-6 px-8 py-6 bg-[#6ab04c]">
        <LocationOn />
        <div>
          <h3 className="font-bold">Our Location</h3>
          <p>
            Dhanmondi 17, Dhaka -1200,
            <br /> Bangladesh
          </p>
        </div>
      </div>
      <div className="lg:flex rounded-md gap-6 md:px-3 lg:px-8 py-6 bg-[#07332F]">
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
  );
};

export default ContactUs;
