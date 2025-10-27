import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";

const projects =[
    {
        title: "",
        description: "",
        link: "/projects",
    },
    {
        title: "",
        description: "",
        link: "/projects",
    },
];

const NewsList = [
    {
        title:"",
        date:"",
        snippet:"",
        link:"/projects",
    }
];

export default function HomePage(){
    return(
        <section className="space-y-16 py-20">
            {/*Hero Section*/}
            <div className="text-center">
                <h1 className="text-5xl font-bold text-teal-400 mb-4">
                    Hi, Myself Mayank Thakur
                </h1>
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                    A programmer from Hills.
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                    I am interested in Computer Vision, Reinforcement Learning and Intersection of Robotics with Artificial Intelligence.
                </p>
            </div>

            {/* News Section*/}
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-teal-400 mb-6">News and Updates</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {NewsList.map((news)=>(
                        <NewsCard key={news.title} {...news}/>
                    ))}
                </div>
            </div>

            {/*Projects Section */}
            <div className="mac-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-teal-400 mb-6">Projects</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {projects.map((project)=>(
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}