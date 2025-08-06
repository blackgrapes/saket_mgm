import Image from "next/image";

const PrincipalMessage = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Welcome to Saket MGM
        </h2>
        <p className="text-center text-gray-500 text-lg mt-2 mb-10">
          A message from our Principal
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Principal Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/principal.jpg" // 💡 Place your image here
                alt="BIBHAS RANJAN PAL Principal"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#f82f53] mb-4">
              A Welcome from Our Principal
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              The present has reached a stage where fundamental questions regarding human values have assumed paramount importance. We are committed to provide a system of education that can unfold human potentialities and channelize them towards essential qualities and attitudes for a useful and fruitful existence in the modern world. Our School strives to be the best school in the region where education encompasses academics, values, culture, sports and every aspect of the life of an individual, so that when a child grows up, he/she is well prepared to face the challenges of life and prevail in every scenario he/she will face.
            </p>
            <p className="text-[#f82f53] font-semibold text-lg mb-4">BIBHAS RANJAN PAL Principal</p>
            <button className="bg-[#f82f53] text-white font-semibold py-2 px-6 rounded-md transition hover:bg-[#e72749] cursor-pointer">
              Read Principal&apos;s Full Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
