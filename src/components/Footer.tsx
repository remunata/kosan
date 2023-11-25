import edasLogo from "../assets/edas-logo.png";

function Footer() {
  return (
    <>
      <div className="flex justify-between items-start px-40 w-full bg-slate-700 z-50 pb-20 pt-10">
        <div className="flex flex-col items-center">
          <img src={edasLogo} alt="logo" className="h-72" />
          <h1 className="text-5xl font-bold text-white">KOSAN</h1>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl font-bold text-white">Navigation</h1>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl font-bold text-white">Universitas Sriwijaya</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
