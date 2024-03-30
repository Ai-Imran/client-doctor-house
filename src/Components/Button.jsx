
const Button = ({btnName}) => {
    return (
        <div>
             <button className="btn hover:bg-[#30336b] outline-none border-0 text-white font-bold bg-[#130f40] mb-8">{btnName}</button>
        </div>
    );
};

export default Button;