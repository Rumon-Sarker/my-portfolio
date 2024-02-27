import { useState } from "react";
import { useRef } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
const Contact = () => {
    const formRef = useRef();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false);

    const handaleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };
    const handaleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        //    temp id: template_kmvpaqw
        // Services id: service_te8qdsb

        // publick key: HAgEOe31QoMD1ncoG

        emailjs.send(
            "service_te8qdsb",
            "template_kmvpaqw",
            {
                from_name: form.name,
                to_name: "Rumon Sarker",
                from_email: form.email,
                to_email: "mdsrrumon1234@gmail.com",
                message: form.message,
            },
            "HAgEOe31QoMD1ncoG"
        )
            .then(() => {
                setLoading(false);
                Swal.fire("Thank You. I will get back to you as soon as possible..");
                setForm({
                    name: "",
                    email: "",
                    message: "",
                })
                    , (error) => {
                        setLoading(false)
                        console.log(error)
                        Swal.fire("Something went Wrong!!")
                    }

            })
    };
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div variants={slideIn("right", "tween", 0, 2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                <p className={`${styles.sectionHeadText}`}>Contact</p>

                <form ref={formRef}
                    onSubmit={handaleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handaleChange}
                            placeholder="Your Name ?"
                            required
                            className="bg-black-200 py-3 px-5 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium shadow-lg shadow-gray-600"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handaleChange}
                            placeholder="Your Email ?"
                            required
                            className="bg-black-200 py-3 px-5 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium shadow-lg shadow-gray-600"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={6}
                            name="message"
                            value={form.message}
                            onChange={handaleChange}
                            required
                            placeholder="Type Your Message..."
                            className="bg-black-200 py-3 px-5 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium shadow-lg shadow-gray-600"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-lg shadow-red-900 rounded-md"
                    > {loading ? "Sending..." : "Send"}</button>

                </form>
            </motion.div>
            <motion.div variants={slideIn("left", "tween", 0, 2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div >
    );
};

export default SectionWrapper(Contact, "contact");