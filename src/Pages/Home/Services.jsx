import Button from "../../Components/Button";
import srdoc from "../../assets/srdoc.jpg";
import cavity from "../../assets/cavity.jpg";
import cosmetic from "../../assets/cosmetic.jpg";
import oral from "../../assets/oral.jpg";
import { useState } from "react";

const Services = () => {
  const [srImage, setSrImage] = useState(oral);
  const [srTiltle, setSrTiltle] = useState("Cavity Protection");

  const handle1 = () => {
    setSrImage(cavity);
    setSrTiltle('Cavity Protection')
  };
  const handle2 = () => {
    setSrImage(cosmetic);
    setSrTiltle('Cosmetic Dentisty')
  };
  const handle3 = () => {
    setSrImage(oral);
    setSrTiltle("Oral Surgery")
  };

  return (
    <div className="flex  justify-center mb-10 gap-10 items-start">
      <div className=" ">
        <img
          className="h-[800px]  rounded border border-lime-400"
          src={srdoc}
          alt="Services Image"
        />
      </div>
      <div>
        <h2 className="font-bold text-xl">Our Services</h2>
        <p className="w-[460px] font-bold text-justify ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <div className="border bg-gray-200 p-4 mt-4 border-lime-500">
          <div className="flex gap-6 mt-8">
            <span onClick={handle1}>
              <Button btnName={"Cavity Protection"}></Button>
            </span>
            <span onClick={handle2}>
              {" "}
              <Button btnName={"Cosmetic Dentisty"} />
            </span>
            <span onClick={handle3}>
              {" "}
              <Button btnName={"Oral Surgery"} />
            </span>
          </div>
          <div className=" ml-12">
            
            <img className="w-[360px] mt-4 rounded h-[250px]" src={srImage} alt="" />
            <span className="mt-6 font-bold text-purple-600 text-xl">{srTiltle}</span>
            <p className="w-[460px] mt-3 text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
            </p>
            <div className="mt-4"><Button btnName={'More Details'}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
