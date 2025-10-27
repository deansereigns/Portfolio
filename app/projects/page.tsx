"use client";
import Link from "next/link";

interface Project {
    id: string;
    title:string;
    shortDesc: string;
    tech: string[];
    image:string;
}

const projects: Project[] = [
    {
        id:"scd",
        title: "On the fly Scene Change Detection",
        shortDesc:"",
        tech:[],
        image:"",
    },

    {
        id:"",
        title: "",
        shortDesc:"",
        tech:[],
        image:"",
    },
    {
        id:"",
        title: "",
        shortDesc:"",
        tech:[],
        image:"",
    },
];

export default function  Projectspage(){
    return(
        <section className="min-h-screen bg-gray-900 py-20 px-6">
            <h1 className="text-4xl font-bold text-teal-400 text-center mb-12">
                Projects
            </h1>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols3">
                {projects.map((project)=>(
                    <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="bg-gray-800 rounded-xl shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
                    >
                        <img 
                            src={project.id}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-white mb-2">
                                {project.title}
                            </h2>
                            <p className="text-2xl font-semibold text-white mb-2">
                                {project.shortDesc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t)=>(
                                    <span
                                        key={t}
                                        className="text-xs bg-teal-700 text-white px-2 py-1 rounded-md"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
