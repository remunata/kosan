import { FC } from "react";
import { Alternative } from "../../data/Alternatives";

type Props = {
  alternatives: Alternative[];
  nsp: () => number[];
  nsn: () => number[];
};

const NSPNSN: FC<Props> = ({ alternatives, nsp, nsn }) => {
  const alternativesList = alternatives.map((alternative, idx) => (
    <tr className="hover:bg-slate-100 cursor-pointer" key={alternative.id}>
      <td className="py-2 border border-slate-400">{alternative.id}</td>
      <td className="py-2 border border-slate-400">{nsp()[idx].toFixed(3)}</td>
      <td className="py-2 border border-slate-400">{nsn()[idx].toFixed(3)}</td>
    </tr>
  ));

  return (
    <>
      <div className="flex flex-col items-center gap-4 w-full relative">
        <h1 className="font-bold text-xl">Normalisasi SP dan SN</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2">Alternative</th>
              <th className="py-2">NSP</th>
              <th className="py-2">NSN</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">{alternativesList}</tbody>
        </table>
      </div>
    </>
  );
};

export default NSPNSN;
