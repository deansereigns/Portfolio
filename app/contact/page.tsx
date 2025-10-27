"use client";

import {useState} from "react";
import { SiGithub, SiLinkedin, SiLeetcode, SiGmail } from "react-icons/si";

export default function ContactPage(){
    const [loading,setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name")?.toString() || "",
            email: formData.get("email")?.toString() || "",
            message: formData.get("message")?.toString() || "",
        };

        try{
            const res =await fetch("/api/contact", {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });

            const result =await res.json();
            if(result.success){
                alert("✅ Message sent Successfully!");
                form.reset();
            } else{
                alert("❌ Failed to send message. Try again later.");
            }
        } catch(err){
            console.error(err);
            alert("❌ Failed to send message. Try again later.");
        }finally {
            setLoading(false);
        }
    };

    return(
        <section className="min-h-screen bg-gray-900 py-20 px-6">
            <h1 className="text-4xl font-bold text-teal-400 text-center mb-10">
                Renraku shite kudasai
            </h1>

            <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
                I’m open to collaborations, research discussions, or professional
                opportunities. Reach out through email or connect with me on social
                platforms.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                {/*Email*/}
                <a
                    href="mailto:mayankthakur865019@gmail.com"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                >
                    <SiGmail className="text-[#EA4335] w-5 h-5" />
                    mayankthakur865019@gmail.com
                </a>
                
                {/* Github */}
                <a
                    href="https://github.com/deansereigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                >
                    <SiGithub className=" text-[#181717] w-5 h-5"/>
                    Github
                </a>

                {/* Linked In */}
                <a
                    href="https://www.linkedin.com/in/deansereigns/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                >
                    <SiLinkedin className="text-[#0A66C2] w-5 h-5"/>
                    Linked In
                </a>
                {/* Gmail */}
                <a
                    href="https://leetcode.com/u/deansereigns/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                >
                    <SiLeetcode className="text-[#FFA116] w-5 h-5"/>
                    Leetcode
                </a>
            </div>

            {/* Contact Form*/}
            <div className="max-w-2xl mx-auto mt-16 bg-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                    Leave a Message
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <input 
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <input 
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <textarea 
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                       type="submit"
                       disabled={loading}
                       className={`bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                       }`}
                    >
                       {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        
        </section>
    );
}