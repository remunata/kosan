import { FC } from "react";

type Props = {
  rangking: () => Rank[];
};

type Rank = {
  id: string;
  name: string;
  value: number;
}

const Rangking: FC<Props> = ({ rangking }) => {

  const rangkingList = rangking().map((item) => (
    <tr className="hover:bg-slate-100 cursor-pointer">
      <td className="py-2 border border-slate-400">{item.id}</td>
      <td className="py-2 border border-slate-400">{item.name}</td>
      <td className="py-2 border border-slate-400">{item.value.toFixed(3)}</td>
    </tr>
  ));

  return (
    <>
      <div className="flex flex-col items-center gap-4 relative pb-24">
        <h1 className="font-bold text-xl">Hasil Perangkingan</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border border-slate-400 bg-slate-300">
              <th className="py-2 px-32">Alternative ID</th>
              <th className="py-2 px-32">Alternative Name</th>
              <th className="py-2 px-32">Skor Akhir (AS)</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">
            {rangkingList}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Rangking;
