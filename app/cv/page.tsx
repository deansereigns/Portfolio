"use client";

export default function CVPage() {
  return (
    <section className="min-h-screen w-screen bg-gray-900 px-6 py-8">
      <h1 className="text-4xl font-bold text-teal-400 mb-6 text-center">
        Curriculum Vitae
      </h1>

      <div className="w-full h-[90vh] flex justify-center">
        <iframe
          src="/cv/cv_mayank_thakur.pdf"
          className="w-[90vw] h-full border-none rounded-lg shadow-lg"
          title="Mayank Thakur CV"
        />
      </div>
    </section>
  );
}
