import edasLogo from "../assets/edas-logo.png";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-10 w-full h-14 bg-slate-700 z-50">
        <div className="flex items-center">
          <img src={edasLogo} alt="logo" className="h-12" />
          <a href="/" className="text-2xl font-bold text-white">KOSAN</a>
        </div>
        <a
          href="#calculation"
          className="px-3 py-1 rounded-sm bg-white font-medium hover:bg-gray-200 transition-colors"
        >
          Get Started
        </a>
      </div>
    </>
  );
}

export default Header;
