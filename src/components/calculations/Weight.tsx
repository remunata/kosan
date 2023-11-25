import { FC } from "react";

type Props = {
  criteriasHeader: JSX.Element[];
  weight: () => number[];
};

const Weight: FC<Props> = ({ criteriasHeader, weight }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 p-10 w-full relative">
        <h1 className="font-bold text-xl">Bobot Ternormalisasi</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              {criteriasHeader}
            </tr>
          </thead>
          <tbody className="text-center bg-white">
            <tr className="border border-slate-400">
              {weight().map((value) => (
                <td className="py-2 border border-slate-400">
                  {value.toFixed(4)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Weight;
