import chair from '../../assets/chair.png'
import sr1 from '../../assets/sr1.png'
import sr2 from '../../assets/sr2.png'


const Appointment = () => {

    const currentDate = new Date();
    const month = currentDate.toLocaleString('default',{month:'long'});
    const date = currentDate.getDate();
    const year = currentDate.getFullYear()
    return (
        <div className="">
            <div className="bg-[#07332F]  h-[500px] relative text-white">
                <div className="absolute top-1/4 space-y-6 right-1/2">

                    <h2 className="text-5xl font-bold">Appointment</h2>
                    <p className="w-[550px] text-justify text-[#c8d6e5]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, corrupti quae ipsum error ea mollitia. Quaerat nam asperiores ipsam, provident maiores amet culpa ex aliquid quae odit iste rerum assumenda! Nam quo quas rerum optio aliquid officia eligendi, pariatur harum. Cupiditate quo iusto ipsa aut, doloribus quaerat! Natus, nemo error cupiditate qui dolores numquam fugiat! Facilis blanditiis in cumque doloribus deleniti dignissimos quidem rerum at voluptates nostrum! Ab velit harum eos laboriosam ipsam autem sapiente illum provident sequi iusto fugit dignissimos explicabo iste voluptas assumenda, et obcaecati modi, minus perspiciatis molestiae enim eaque libero cum! Quidem sapiente quaerat ipsa possimus!</p>
                </div>
                <div className='absolute top-1/4 left-1/2'>
                    <img className='ml-8 w-[500px]' src={chair} alt="" />
                </div>
            </div>
            <div className='my-16 px-6'>
                <h2>{`${month}-${date}-${year}`}</h2>
                <h2 className="text-3xl font-bold text-center">Plese select a Service</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr1} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr2} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr1} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr2} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr1} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr2} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr1} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr2} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr1} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr2} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr1} alt="" />
                    <img onClick={() => document.getElementById('my_modal_5').showModal()} src={sr2} alt="" />
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                   <input className='block mb-2 w-full border border-lime-500 outline-none rounded-md p-2 py-2'   type="date" />
                   <input className='block mb-2 w-full border border-lime-500 outline-none rounded-md p-2 py-2'   type="time" />
                   <input className='block mb-2 w-full border border-lime-500 outline-none rounded-md p-2 py-2'   type="text" placeholder='service name' />
                   <input  className='block mb-2 w-full border border-lime-500 outline-none rounded-md p-2 py-2'  type="email" placeholder='Enter your email'/>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn lg:w-[459px] hover:bg-[#30336b] outline-none border-0 text-white font-bold bg-[#130f40] mb-8">Submit</button>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Appointment;