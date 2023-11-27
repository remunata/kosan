import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Documentation() {
  return (
    <>
      <div className="w-full bg-white px-40 pt-36 pb-24 relative">
        <svg
          width="500"
          height="80"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="absolute top-0 w-full left-0"
        >
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#cbd5e1" />
        </svg>
        <h1 className="text-4xl font-bold text-center mb-16">
          <FontAwesomeIcon icon={faLightbulb} className="mr-5" />
          How it Works
        </h1>
        <div className="flex items-start justify-between gap-20">
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-2xl font-bold">
              <span className="mr-3">1.</span>Criterias
            </h2>
            <p>
              You can review criterias below and change to your preferred
              criterias. You can add and delete them.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-2xl font-bold">
              <span className="mr-3">2.</span>Alternatives
            </h2>
            <p>
              Alternatives is the options that you want to compare. You can add
              and delete them as well.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-2xl font-bold">
              <span className="mr-3">3.</span>Calculation Matrix
            </h2>
            <p>
              Calculation Matrix is the matrix that you can compare your
              criterias with your alternatives. They take values from 1 to 5.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-2xl font-bold">
              <span className="mr-3">4.</span>You are ready to go!
            </h2>
            <p>Click the calculate button and see the results!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documentation;
