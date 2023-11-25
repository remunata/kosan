import { FC } from "react";
import { Alternative } from "../../data/Alternatives";

type Props = {
  criteriasHeader: JSX.Element[];
  alternatives: Alternative[];
  nda: () => number[][];
};

const NDA: FC<Props> = ({ criteriasHeader, alternatives, nda }) => {

  const alternativesList = alternatives.map((alternative, idx) => (
    <tr className="hover:bg-slate-100 cursor-pointer" key={alternative.id}>
      <td className="py-2 border border-slate-400">{alternative.id}</td>
      {nda().map((value) => (
        <td className="py-2 border border-slate-400">
          {value[idx].toFixed(3)}
        </td>
      ))}
    </tr>
  ));

  return (
    <>
      <div className="flex flex-col items-center gap-4 pr-5 mr-5 w-full relative">
        <h1 className="font-bold text-xl">Rata-rata Jarak Negatif (NDA)</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2">Alternative</th>
              {criteriasHeader}
            </tr>
          </thead>
          <tbody className="text-center bg-white">{alternativesList}</tbody>
        </table>
      </div>
    </>
  );
};

export default NDA;
