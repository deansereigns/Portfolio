interface NewsProps {
    title: string;
    date: string;
    snippet:string;
    link:string;
}

export default function NewsCard({title, date, snippet, link}:NewsProps){
    return(
        <div className="border border-gray-700 rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1 text-teal-400">{title}</h3>
            <span className="text-gray-500 text-sm mb-2 block">{date}</span>
            <p className="text-gray-300 mb-3">{snippet}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
            >
                Read More →
            </a>
        </div>
    );
}