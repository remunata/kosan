import edasLogo from "../assets/edas-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="px-40 w-full bg-slate-700 z-50 py-10 text-white flex flex-col relative">
        <div className="w-full flex justify-between items-center">
          <span className="text-md italic">
            This application is open source, you can contribute in GitHub
          </span>
          <a href="https://github.com/remunata/kosan" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl cursor-pointer"
            />
          </a>
        </div>
        <hr className="mt-6 mb-8" />
        <div className="flex justify-between items-start gap-20">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={edasLogo} alt="edas-logo" className="h-16" />
              <h1 className="text-3xl font-bold">KOSAN</h1>
            </div>
            <div>
              <p className="mt-6">
                Solusi untuk menemukan tempat tinggal anda di sekitar kampus
                <br />
                Universitas Sriwijaya Indralaya dengan menggunakan metode
                <br />
                EDAS (Evaluation based on Distance from Average Solution)
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold pt-2">AUTHORS</h1>
            <div className="mt-8 flex flex-col gap-4">
              <span>Dellin Irawan</span>
              <span>Hanif Syahri Ramadhani</span>
              <span>Mahendra Dinata</span>
              <span>Risky Armansyah</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold pt-2">CONTACT</h1>
            <div className="mt-8 flex flex-col gap-4">
              <span>
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                Fakultas Ilmu Komputer, Universitas Sriwijaya
              </span>
              <span>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                remdinata@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <span className="text-md italic float-right">
            Copyright &copy; 2023 KOSAN. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
