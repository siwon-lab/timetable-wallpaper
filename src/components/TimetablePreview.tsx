import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

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
   return (
      <div className="flex flex-1 items-center justify-center bg-[#eee]">
         <div
            className="flex h-[766.8px] w-[353.7px] flex-col rounded-4xl border-2 border-black/10 px-6 pt-40"
            style={{ backgroundColor: bgColor, color: textColor }}
         >
            <p className="text-4xl font-bold">{title}</p>
            <p className="text-xl">{subtitle1}</p>
            <p className="ml-auto text-xl">{subtitle2}</p>
            <div
               className="grid"
               style={{
                  gridTemplateColumns: `repeat(${days.filter((d) => d.enabled).length + 1}, minmax(0, 1fr))`,
               }}
            >
               <div></div>
               {days
                  .filter((d) => d.enabled)
                  .map((d) => (
                     <div>{d.day}</div>
                  ))}
               <div>1</div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      </div>
   );
}
