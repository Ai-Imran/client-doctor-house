import { Link } from "react-router-dom";
import logo from "../assets/doclo.png";

const Footer = () => {

    const currentDate = new Date();
    const formatedDate = currentDate.getFullYear()
    return (
      <div className="bg-[#2c3e50] pb-16 text-[#bdc3c7]">
          <footer className="footer p-10 ">
            <aside>
                <Link to={'/'}><img className="w-32 rounded-lg" src={logo} alt="" /></Link>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Working Hours</h6>
                <p>
                    Monday - 10 am to 7 pm <br />
                    Tuesday - 10 am to 7 pm <br />
                    Wednesday - 10 am to 7 pm <br />
                    Thursday - 10 am to 7 pm <br />
                    Friday - 10 am to 7 pm <br />
                    Saturday - 10 am to 7 pm <br />
                    Sunday - 10 am to 7 pm <br />
                </p>
            </nav>
          
            
        </footer>
        <div className="divider w-1/2 divider-secondary mx-auto "></div>
       <div className="mx-auto md:text-center lg::w-[320px]"> <small className="mx-auto"> All Reseverd by {formatedDate} ,no CopyRight </small></div>
      </div>
    );
};

export default Footer;