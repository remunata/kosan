import { FC, useState } from "react";
import { Alternative } from "../data/Alternatives";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  alternatives: Alternative[];
  setAlternatives: (val: Alternative[]) => void;
  matrix: number[][];
  setMatrix: (val: number[][]) => void;
  setShowCalculation: (val: boolean) => void;
};

const Alternatives: FC<Props> = ({ alternatives, setAlternatives, matrix, setMatrix, setShowCalculation }) => {
  const [showForm, setShowForm] = useState<Boolean>(false);

  const defaultAlternative: Alternative = {
    id: "",
    name: "",
  };

  const [alternative, setAlternative] =
    useState<Alternative>(defaultAlternative);

  const handleDeleteAlternative = (index: number) => () => {
    setShowCalculation(false);

    let arr  = [...alternatives];
    arr.splice(index, 1);
    setAlternatives(arr);

    let arrMatrix = [...matrix];
    arrMatrix.splice(index, 1);
    setMatrix(arrMatrix);
  };

  const handleSubmitAlternative = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowCalculation(false);
    setAlternatives([...alternatives, alternative]);
    setAlternative(defaultAlternative);
    setShowForm(false);
    setMatrix([...matrix, Array(matrix[0].length).fill(0)]);
  };

  const alternativesList = alternatives.map((alternative, index) => (
    <tr className="hover:bg-slate-100 cursor-pointer" key={alternative.id}>
      <td className="py-2 border border-slate-400">{alternative.id}</td>
      <td className="py-2 border border-slate-400">{alternative.name}</td>
      <td className="py-2 border border-slate-400">
        <button onClick={handleDeleteAlternative(index)}>
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
      <div className="flex flex-col items-center gap-4 mr-5 pr-5 w-full">
        <h1 className="font-bold text-xl">Alternatives</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2">ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">{alternativesList}</tbody>
        </table>
        <div className="w-full">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-slate-600 text-white py-1.5 px-3 flex items-center gap-2 rounded-sm cursor-pointer hover:bg-slate-700 transition-colors"
            >
              <FontAwesomeIcon icon={faPlus} />
              New Alternative
            </button>
          ) : (
            <div>
              <form onSubmit={handleSubmitAlternative}>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="flex flex-col items-start gap-1">
                    <label className="text-sm font-bold">ID</label>
                    <input
                      type="text"
                      value={alternative.id}
                      onChange={(e) => {
                        setAlternative({ ...alternative, id: e.target.value });
                      }}
                      className="w-full border border-slate-800 px-2 py-1 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <label className="text-sm font-bold">Name</label>
                    <input
                      type="text"
                      value={alternative.name}
                      onChange={(e) => {
                        setAlternative({
                          ...alternative,
                          name: e.target.value,
                        });
                      }}
                      className="w-full border border-slate-800 px-2 py-1 rounded-sm"
                    />
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

export default Alternatives;
