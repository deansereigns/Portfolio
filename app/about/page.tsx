export default function AboutPage(){
    return (
        <section className="max-w-4xl mx-auto py-20 px-6 space-y-8">
            <h1 className="test-4xl font-bold text-teal-00 mb-6 text-center">
                Acerca de mí
            </h1>

            <p className="text-gray-300 leading-rexaled text-lg">
                Myself Mayank Thakur, a passionate reseacrher currently working in Deep Learning for Robotics. Currently, I am pursing M.Tech by Research in Robotics at Centre for Artificial Intelligence and Robotics Indian Institue of Technology, Mandi.
                Currently  I am working on UAV&aspos;s based Scene Change Detection.
            </p> 
            <p className="text-gray-300 leading-rexaled text-lg">
                My primary tech stack revolves around{" "}
                <span className="text-gray-100 font-semibold">PyTorch, Pytorch Lightening, Numpy, and related Python tools and libraries</span>
            </p>

            <div>
                <h2 className="text-2xl font-smibold text-teal-400 mb-4">
                    Skills and Tools
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
                    <li>Java</li>
                    <li> Python</li> 
                    <li>C++</li> 
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>Robot Operating System</li> 
                    <li>Pytorch</li> 
                    <li>React.js</li> 
                    <li>Node.js</li>  
                    <li>MongoDB</li> 
                    <li>MySQL</li>
                    <li>NumPy</li> 
                    <li>Pandas</li>
                    <li>Scikit-learn</li>
                </ul>
            </div>

        </section>
    );
}