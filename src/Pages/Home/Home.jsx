import Banner from "./Banner";
import BookNow from "./BookNow";
import ContactUs from "./ContactUs";
import ExpertDoctors from "./ExpertDoctors";
import PtCarousel from "./PtCarousel";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ContactUs />
      <div className="text-center space-y-3 my-16">
        <h2 className="text-4xl  font-bold">What Our Patients Says</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae  ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      <PtCarousel/>
      <ExpertDoctors/>
      <BookNow/>
    </div>
  );
};

export default Home;
