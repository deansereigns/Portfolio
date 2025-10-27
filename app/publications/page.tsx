"use client"

import{ useState} from 'react';

interface Publication {
    title: string;
    authors: string;
    conference:string;
    year: string;    
    abstract?:string;
    bibtex: string
    paper?:string;
    image?:string;
    
}
const publications: Publication[]=[
    {
        title: "Spectral-Temporal Attention for Robust Change Detection",
        authors: "Mayank Thakur, Radhe Shyam Sharma, Vinod K Kurmi, Raj Samant, Badri Narayana Patro",
        conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
        year: "2025",
        abstract:"",
        bibtex:"",
        paper:"",
        image:"",
    }
]

export default function PublicationsPage(){
    const [showAbstract, setShowAbstract] = useState<string| null>(null);
    const [showBibtex, setShowBibtex] = useState<string |null>(null);
    const [showImage, setShowImage] = useState<string | null>(null);

    const highlightAuthor = (authors:string) =>{
        return authors.split(", ").map((name,idx)=>{
            const isYou = name.toLowerCase().includes("mayank thakur");
            return (
                <span key={idx}>
                    {isYou ? (
                        <span className='font-smibold text-teal-400'>{name}</span>
                    ): (
                        name
                    )}
                    {idx < authors.split(", ").length -1 &&", "}
                </span>
            );
        });
    };

    return(
        <section className='max-w-5xl mx-auto py-20 px-6 space-y-10'>
            <h1 className='text-4xl font-bold text-teal-400 text-center mb-10'>
                Publications
            </h1>

            <div className='space-y-8'>
                {publications.map((pub)=>(
                    <div
                        key={pub.title}
                        className='border border-gray-700 p-6 rounded-lg hover:shadow-lg transition'
                    >
                        <div className="flex flex-col md:flex md:items-satrt gap-6">
                            {pub.image &&(
                                <img
                                    src={pub.image}
                                    alt={pub.title}
                                    className="w-full md:w-1/3 rounded-lg cursor-pointer hover:opacity-80"
                                    onClick={()=>setShowImage(pub.image!)}
                                />
                            )}

                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-teal-400 mb-2">
                                    {pub.title}
                                </h2>
                                <p className='text-gray-500-mb-3'>
                                    {highlightAuthor(pub.authors)}
                                </p>

                                <p className='text-gray-500 mb-3'>
                                    {pub.conference} • {pub.year}
                                </p>

                                <div className='flex flex-wrap gap-4'>
                                    {pub.paper && (
                                        <a
                                            href={pub.paper}
                                            target="_blank"
                                            rel = "noopener noreferrer"
                                            className='text-teal-400 hover:underline'
                                        >
                                            📄 Paper
                                        </a>
                                    )}
                                    {pub.abstract && (
                                        <button
                                            onClick={()=> setShowAbstract(pub.abstract!)}
                                            className="text-teal-400 hover:underline"
                                        >
                                            🧩 Abstract
                                        </button>
                                    )}
                                    {pub.bibtex && (
                                        <button
                                            onClick={()=>setShowBibtex(pub.bibtex!)}
                                            className='text-teal-400 hover:underline'
                                        >
                                            🔖 BibTeX
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Abstract modal*/}
            {showAbstract && (
                <div
                    className='fixed inset-0 flex items-center justigy-center bg-black bg-opacity-60 z-50'
                    onClick={()=>setShowAbstract(null)}
                >
                    <div
                        className='bg-gray-900 p-6 rounded-xl max-w-xl w-full border border-gray-700'
                        onClick={(e)=>e.stopPropagation()}
                    >
                        <h3 className='text-2xl font-bold text-teal-400 mb-4'>Abstract</h3>
                        <p className='text-gray-300 mb-6'>{showAbstract}</p>
                        <button
                            onClick={()=>setShowAbstract(null)}
                            className='px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg'
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/*Bibtex modal*/}
            {showBibtex &&(
                <div
                    className='fixed inset-0 flex items-center justiy-center bg-black bg-opactiy-60 z-50'
                    onClick={()=>setShowBibtex(null)}
                >
                    <div 
                        className="bg-gray-900 p-6 rounded-xl max-w-xl w-full border border-gray-700"
                        onClick={(e)=> e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold text-teal-400 mb-4">BibTex</h3>
                        <pre className='text-gray-300 mb-6 whitespace-pre-wrap text-sm'>
                            {showBibtex}
                        </pre>
                        <button
                            onClick={()=>setShowBibtex(null)}
                            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Image Modal */}
            {showImage && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50'
                onClick={()=>setShowImage(null)}
            >
                <img
                src={showImage}
                alt="Publication Figure"
                className='max-w-4xl max-h-[90vh] rounded-lg border border-gray-700'
                />
            </div>
            )}
        </section>
    );
}