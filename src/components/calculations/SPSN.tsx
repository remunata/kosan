import { FC } from "react";
import { Alternative } from "../../data/Alternatives";

type Props = {
  alternatives: Alternative[];
  sp: () => number[];
  sn: () => number[];
};

const SPSN: FC<Props> = ({ alternatives, sp, sn }) => {
  const alternativesList = alternatives.map((alternative, idx) => (
    <tr className="hover:bg-slate-100 cursor-pointer" key={alternative.id}>
      <td className="py-2 border border-slate-400">{alternative.id}</td>
      <td className="py-2 border border-slate-400">{sp()[idx].toFixed(3)}</td>
      <td className="py-2 border border-slate-400">{sn()[idx].toFixed(3)}</td>
    </tr>
  ));

  return (
    <>
      <div className="flex flex-col items-center gap-4 w-full relative">
        <h1 className="font-bold text-xl">Jumlah Jarak Terbobot SP dan SN</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2">Alternative</th>
              <th className="py-2">SP</th>
              <th className="py-2">SN</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">{alternativesList}</tbody>
        </table>
      </div>
    </>
  );
};

export default SPSN;
