import heroLogo from "../../public/hero.png";

function Hero() {
  return (
    <>
      <div className="w-full flex items-center justify-between pl-40 max-h-screen bg-slate-300">
        <div>
          <h1 className="text-5xl font-bold">Decision Support System</h1>
          <h1 className="text-7xl font-bold text-sky-600 mt-2">KOSAN</h1>
          <p className="text-xl mt-7 mb-12">
            Solusi untuk menemukan tempat tinggal anda di sekitar kampus
            <br />
            Universitas Sriwijaya Indralaya dengan menggunakan metode
            <br />
            <span className="">
              EDAS (Evaluation based on Distance from Average Solution)
            </span>
          </p>
          <a
            className="bg-sky-500 px-7 py-2 rounded-md text-white font-medium text-xl hover:bg-sky-700 transition-colors cursor-pointer"
            href="#calculation"
          >
            Get Started
          </a>
        </div>
        <div>
          <img src={heroLogo} alt="hero" className="min-h-[700px]" />
        </div>
      </div>
    </>
  );
}

export default Hero;
