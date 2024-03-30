
import Button from '../../Components/Button';
import doc1 from '../../assets/do1.png'
import doc2 from '../../assets/do2.png'
import doc3 from '../../assets/do5.png'
import './style.css'

const Banner = () => {
    
    return (
        <div className=" nav-body relative ">
         <div className="flex gap-6 ml-24 mb-10 pt-10 text-white ">
         <div className='space-y-5 '>
                <h2 className="text-6xl font-bold">
                Your Best Medical <br /> Help Center
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Hic assumenda itaque perspiciatis totam, consequuntur atque,<br /> vero voluptatum ab maiores ipsa perferendis sit odio possimus <br /> cum ad sed sequi! Pariatur, inventore..</p>
               <Button btnName={"All Service"}/>
            </div>
            <div className='relative'>
                <img className='w-[300px] ' src={doc1} alt="" />
                <img className='w-[160px] orgin-to border-[#fff200] rotate-12 border absolute left-[120px] -top-[140px]' src={doc2} alt="" />
                <img className='w-[200px] origin-top-left rotate-12 border h-[292px] absolute top-8 left-[340px]' src={doc3} alt="" />

            </div>
         </div>
         {/* <h2 className='absolute top-0 right-12'>ffdfdf</h2> */}
        </div>
    );
};

export default Banner;