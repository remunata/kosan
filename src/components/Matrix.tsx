import { FC } from "react";
import { Alternative } from "../data/Alternatives";
import { Criteria } from "../data/Criterias";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  criterias: Criteria[];
  Alternatives: Alternative[];
  matrix: number[][];
  setMatrix: (val: number[][]) => void;
  setShowCalculation: (val: boolean) => void;
};

const Matrix: FC<Props> = ({
  criterias,
  Alternatives,
  matrix,
  setMatrix,
  setShowCalculation,
}) => {
  const criteriasHeader = criterias.map((criteria) => (
    <th className="py-2" key={criteria.id}>
      {criteria.id}
    </th>
  ));

  const alternativesList = Alternatives.map((alternative, idx) => (
    <tr className="hover:bg-slate-100 cursor-pointer" key={alternative.id}>
      <td className="py-2 border border-slate-400">{alternative.id}</td>
      {matrix[idx].map((value, index) => (
        <td className="py-2 border border-slate-400">
          <FontAwesomeIcon
            icon={faMinus}
            className="mr-5 text-sm"
            onClick={() => {
              if (value === 1) return;
              setShowCalculation(false);
              let arr = [...matrix];
              arr[idx][index] -= 1;
              setMatrix(arr);
            }}
          />
          <label className="px-4 bg-slate-300 py-1 rounded-md">{value}</label>
          <FontAwesomeIcon
            icon={faPlus}
            className="ml-5 text-sm"
            onClick={() => {
              if (value === 5) return;
              setShowCalculation(false);
              let arr = [...matrix];
              arr[idx][index] += 1;
              setMatrix(arr);
            }}
          />
        </td>
      ))}
    </tr>
  ));

  return (
    <>
      <div className="flex flex-col items-center gap-4 px-10 w-full relative">
        <h1 className="font-bold text-xl">Calculation Matrix</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2 border border-slate-400" rowSpan={2}>
                Alternative
              </th>
              <th className="py-2" colSpan={criterias.length}>
                Criterias
              </th>
            </tr>
            <tr className="border border-slate-400 bg-slate-300">
              {criteriasHeader}
            </tr>
          </thead>
          <tbody className="text-center bg-white">{alternativesList}</tbody>
        </table>
      </div>
    </>
  );
};

export default Matrix;
