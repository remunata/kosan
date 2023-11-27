import { FC, useState } from "react";
import { Criteria } from "../data/Criterias";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlus,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  criterias: Criteria[];
  setCriterias: (val: Criteria[]) => void;
  matrix: number[][];
  setMatrix: (val: number[][]) => void;
  setShowCalculation: (val: boolean) => void;
};

const Criterias: FC<Props> = ({ criterias, setCriterias, matrix, setMatrix, setShowCalculation }) => {
  const [showForm, setShowForm] = useState<Boolean>(false);
  const defaultCriteria: Criteria = {
    id: "",
    name: "",
    status: "Benefit",
    weight: 10,
  };
  const [criteria, setCriteria] = useState<Criteria>(defaultCriteria);

  const handleDeleteCriteria = (index: number) => {
    setShowCalculation(false);
    
    let arr = [...criterias];
    arr.splice(index, 1);
    setCriterias(arr);

    let arrMatrix = [...matrix];
    arrMatrix.forEach((row) => row.splice(index, 1));
    setMatrix(arrMatrix);
  };

  const handleSubmitCriteria = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowCalculation(false)
    setCriterias([...criterias, criteria]);
    setCriteria(defaultCriteria);
    setShowForm(false);
    let arrMatrix = [...matrix];
    arrMatrix.forEach((row) => row.push(0));
    setMatrix(arrMatrix);
  };

  const criteriasList = criterias.map((criteria, index) => (
    <tr className="hover:bg-slate-100 cursor-pointer" key={criteria.id}>
      <td className="py-2 border border-slate-400">{criteria.id}</td>
      <td className="py-2 border border-slate-400">{criteria.name}</td>
      <td className="py-2 border border-slate-400">{criteria.status}</td>
      <td className="py-2 border border-slate-400">{criteria.weight}</td>
      <td className="py-2 border border-slate-400">
        <button onClick={() => handleDeleteCriteria(index)}>
          <FontAwesomeIcon
            icon={faTrash}
            className="hover:text-red-500 transition-colors"
          />
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="flex flex-col items-center gap-4 ml-5 pl-5 w-full relative">
        <h1 className="font-bold text-xl">Criterias</h1>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2">ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Weight</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">{criteriasList}</tbody>
        </table>
        <div className="w-full">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-slate-600 text-white py-1.5 px-3 flex items-center gap-2 rounded-sm cursor-pointer hover:bg-slate-700 transition-colors"
            >
              <FontAwesomeIcon icon={faPlus} />
              New Criteria
            </button>
          ) : (
            <div>
              <form onSubmit={handleSubmitCriteria}>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex flex-col items-start gap-1">
                    <label className="text-sm font-bold">ID</label>
                    <input
                      type="text"
                      value={criteria.id}
                      onChange={(e) => {
                        setCriteria({ ...criteria, id: e.target.value });
                      }}
                      className="w-full border border-slate-800 px-2 py-1 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <label className="text-sm font-bold">Name</label>
                    <input
                      type="text"
                      value={criteria.name}
                      onChange={(e) => {
                        setCriteria({ ...criteria, name: e.target.value });
                      }}
                      className="w-full border border-slate-800 px-2 py-1 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <label className="text-sm font-bold">Status</label>
                    <select
                      value={criteria.status}
                      onChange={(e) =>
                        setCriteria({ ...criteria, status: e.target.value })
                      }
                      className="w-full px-2 py-1 rounded-sm bg-slate-300"
                    >
                      <option value="Benefit">Benefit</option>
                      <option value="Cost">Cost</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <label className="text-sm font-bold">Weight</label>
                    <div className="flex items-center gap-4 w-full">
                      <label>{criteria.weight}</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={criteria.weight}
                        onChange={(e) => {
                          setCriteria({
                            ...criteria,
                            weight: Number(e.target.value),
                          });
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="float-right py-1.5 px-4 bg-blue-600 text-white flex items-center gap-2 rounded-sm hover:bg-blue-700 transition-colors"
                  >
                    Submit
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="float-right py-1.5 px-4 bg-red-600 text-white flex items-center gap-2 rounded-sm hover:bg-red-700 transition-colors mr-4"
                  >
                    Cancel
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Criterias;
