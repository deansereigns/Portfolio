interface ProjectProps{
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({title,description,link}:ProjectProps){
    return(
        <div className="border border-gray-700 rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-teal-400">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
            >
                View project →
            </a>
        </div>
    );
}