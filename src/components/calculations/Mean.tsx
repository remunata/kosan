import { FC } from "react";

type Props = {
  criteriasHeader: JSX.Element[];
  alternativesList: JSX.Element[];
  mean: () => number[];
};

const Mean: FC<Props> = ({ criteriasHeader, alternativesList, mean }) => {
  
  return (
    <>
      <div className="flex flex-col items-center gap-4 p-10 pt-5 w-full relative">
        <h1 className="font-bold text-xl">Rata-rata Setiap Criteria</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2">Alternative</th>
              {criteriasHeader}
            </tr>
          </thead>
          <tbody className="text-center bg-white">
            {alternativesList}
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2">Mean</th>
              {mean().map((value) => (
                <th className="py-2 border border-slate-400">
                  {value.toFixed(3)}
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Mean;
