import { Link } from "react-router-dom";
import facebook from "../assets/socilicon/facebook.png";
import github from "../assets/socilicon/github.png";
import linkdin from "../assets/socilicon/linkdin.png";

const SochialLink = () => {

    return (
        <div className="mx-12">
            <h1 className="text-center my-5 text-gray-300 mb-12 text-3xl  uppercase font-bold">social-link</h1>
            <div className="flex md:justify-center gap-6 justify-evenly " >

                <Link target="blank" to={"https://www.facebook.com/md.srrumon121"}>
                    <img className="w-[90px]" src={facebook} alt="facebook link" />
                </Link>
                <Link target="blank" to={""}>
                    <img className="w-[90px]" src={github} alt="github link" />
                </Link>
                <Link target="blank" to={"https://www.linkedin.com/in/md-rumon-sarker-589209241/"}>
                    <img className="w-[90px]" src={linkdin} alt="linkdin link" />
                </Link>

            </div>
        </div>
    );
};

export default SochialLink;