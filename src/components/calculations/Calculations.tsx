import { FC } from "react";
import { Alternative } from "../../data/Alternatives";
import { Criteria } from "../../data/Criterias";

import Mean from "./Mean";
import PDA from "./PDA";
import NDA from "./NDA";
import Weight from "./Weight";
import SPSN from "./SPSN";
import NSPNSN from "./NSPNSN";
import AS from "./AS";

type Props = {
  criterias: Criteria[];
  alternatives: Alternative[];
  matrix: number[][];
};

const Calculations: FC<Props> = ({ criterias, alternatives, matrix }) => {
  const criteriasHeader = criterias.map((criteria) => (
    <th className="py-2">{criteria.id}</th>
  ));

  const alternativesList = alternatives.map((alternative, idx) => (
    <tr className="hover:bg-slate-100 cursor-pointer" key={alternative.id}>
      <td className="py-2 border border-slate-400">{alternative.id}</td>
      {matrix[idx].map((value) => (
        <td className="py-2 border border-slate-400">{value}</td>
      ))}
    </tr>
  ));

  const mean = () => {
    let arr = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < matrix.length; j++) {
        sum += matrix[j][i];
      }
      arr.push(sum / matrix.length);
    }

    return arr;
  };

  const pda = () => {
    let arr = [];
    for (let i = 0; i < criterias.length; i++) {
      let pdaCriteria = [];
      for (let j = 0; j < matrix.length; j++) {
        if (criterias[i].status === "Benefit") {
          pdaCriteria.push(Math.max(0, matrix[j][i] - mean()[i]) / mean()[i]);
        } else {
          pdaCriteria.push(Math.max(0, mean()[i] - matrix[j][i]) / mean()[i]);
        }
      }
      arr.push(pdaCriteria);
    }

    return arr;
  };

  const nda = () => {
    let arr = [];
    for (let i = 0; i < criterias.length; i++) {
      let ndaCriteria = [];
      for (let j = 0; j < matrix.length; j++) {
        if (criterias[i].status === "Benefit") {
          ndaCriteria.push(Math.max(0, mean()[i] - matrix[j][i]) / mean()[i]);
        } else {
          ndaCriteria.push(Math.max(0, matrix[j][i] - mean()[i]) / mean()[i]);
        }
      }
      arr.push(ndaCriteria);
    }

    return arr;
  };

  const weight = () => {
    let sum = 0;
    criterias.forEach((criteria) => {
      sum += criteria.weight;
    });

    let arr = [criterias.length];
    for (let i = 0; i < criterias.length; i++) {
      arr[i] = criterias[i].weight / sum;
    }

    return arr;
  };

  const sp = () => {
    let arr = [];
    for (let i = 0; i < pda()[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < pda().length; j++) {
        sum += pda()[j][i] * weight()[j];
      }
      arr.push(sum);
    }

    return arr;
  };

  const sn = () => {
    let arr: number[] = [];
    for (let i = 0; i < nda()[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < nda().length; j++) {
        sum += nda()[j][i] * weight()[j];
      }
      arr.push(sum);
    }

    return arr;
  };

  const nsp = () => {
    let max = 0;
    sp().forEach((value) => {
      if (value > max) {
        max = value;
      }
    });

    let arr: number[] = [];
    sp().forEach((value) => {
      arr.push(value / max);
    });

    return arr;
  };

  const nsn = () => {
    let max = 0;
    sn().forEach((value) => {
      if (value > max) {
        max = value;
      }
    });

    let arr: number[] = [];
    sn().forEach((value) => {
      arr.push(1 - value / max);
    });

    return arr;
  };

  const as = () => {
    let arr: number[] = [];
    for (let i = 0; i < nsp().length; i++) {
      arr.push((nsp()[i] + nsn()[i]) / 2);
    }

    return arr;
  };

  return (
    <>
      <Mean
        criteriasHeader={criteriasHeader}
        alternativesList={alternativesList}
        mean={mean}
      />
      <div className="flex items-center gap-10 w-full">
        <PDA
          criteriasHeader={criteriasHeader}
          alternatives={alternatives}
          pda={pda}
        />
        <NDA
          criteriasHeader={criteriasHeader}
          alternatives={alternatives}
          nda={nda}
        />
      </div>
      <Weight criteriasHeader={criteriasHeader} weight={weight} />
      <div className="flex items-center px-10 gap-10 w-full mb-20">
        <SPSN alternatives={alternatives} sp={sp} sn={sn} />
        <NSPNSN alternatives={alternatives} nsp={nsp} nsn={nsn} />
        <AS alternatives={alternatives} as={as} />
      </div>
    </>
  );
};

export default Calculations;
