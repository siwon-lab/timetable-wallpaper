import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

export default function TimetablePreview() {
   const title = useSelector((state: RootState) => state.timetable.title);
   const subtitle1 = useSelector(
      (state: RootState) => state.timetable.subtitle1,
   );
   const subtitle2 = useSelector(
      (state: RootState) => state.timetable.subtitle2,
   );
   const textColor = useSelector(
      (state: RootState) => state.timetable.textColor,
   );
   const bgColor = useSelector((state: RootState) => state.timetable.bgColor);
   const days = useSelector((state: RootState) => state.days);
   const periods = useSelector((state: RootState) => state.periods);
   const subjects = useSelector((state: RootState) => state.subjects);

   const [selectedCell, setSelectedCell] = useState<{
      periodId: number;
      day: string;
   } | null>(null);
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   return (
      <div className="flex flex-1 items-center justify-center bg-[#eee]">
         <div
            className="flex h-[766.8px] w-[353.7px] flex-col rounded-4xl border-2 border-black/10 px-4 pt-40"
            style={{ backgroundColor: bgColor, color: textColor }}
         >
            <p className="text-4xl font-bold">{title}</p>
            <p className="text-xl">{subtitle1}</p>
            <p className="mb-8 ml-auto text-xl">{subtitle2}</p>
            <div
               className="grid divide-x divide-y divide-black/10 border"
               style={{
                  gridTemplateColumns: `auto repeat(${days.filter((d) => d.enabled).length}, minmax(0, 1fr))`,
               }}
            >
               <div className=""></div>
               {days
                  .filter((d) => d.enabled)
                  .map((d) => (
                     <div key={d.day}>{d.day}</div>
                  ))}
               {periods.map((p) => (
                  <Fragment key={p.id}>
                     <div>
                        <p>{p.name}</p>
                        <p className="text-[10px] text-gray-400">{p.time}</p>
                     </div>
                     {days
                        .filter((d) => d.enabled)
                        .map((d, i) => (
                           <button
                              key={i}
                              className="cursor-pointer transition-colors hover:bg-black/10"
                              onClick={() => {
                                 setSelectedCell({
                                    periodId: p.id,
                                    day: d.day,
                                 });
                                 setIsDialogOpen(true);
                              }}
                           ></button>
                        ))}
                  </Fragment>
               ))}
            </div>
         </div>
         {isDialogOpen && (
            <div
               className="fixed inset-0 flex items-center justify-center bg-black/20"
               onClick={() => {
                  setIsDialogOpen(false);
               }}
            >
               <div
                  className="w-80 rounded-lg bg-white p-6"
                  onClick={(e) => e.stopPropagation()}
               >
                  <p className="mb-4 text-xl font-semibold">
                     {selectedCell?.day}{' '}
                     {
                        periods.find((p) => p.id === selectedCell?.periodId)
                           ?.name
                     }{' '}
                     편집
                  </p>
                  <p className="mb-2 text-sm font-semibold text-black/40">
                     과목 선택
                  </p>
                  <div className="mb-6 grid grid-cols-3 gap-2">
                     <button className="cursor-pointer rounded-lg border border-black/10 py-2 text-lg font-semibold text-black/10">
                        비움
                     </button>
                     {subjects.map((s) => (
                        <button
                           className="cursor-pointer rounded-lg py-2 text-lg font-semibold border"
                           style={{ backgroundColor: s.color }}
                        >
                           <p className="text-center text-white">{s.name}</p>
                        </button>
                     ))}
                  </div>
                  {/* <p className="mb-4 text-sm font-semibold text-black/40">
                     부가 사항(강의실, 선생님 등)
                  </p> */}
                  <div className="flex gap-2">
                     <button
                        className="w-full cursor-pointer rounded-lg border border-black/10 py-2 text-lg font-semibold text-black/10 transition-colors hover:border-emerald-400 hover:text-emerald-400"
                        onClick={() => {
                           setIsDialogOpen(false);
                        }}
                     >
                        취소
                     </button>
                     <button className="w-full cursor-pointer rounded-lg bg-emerald-400 py-2 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300">
                        저장
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
