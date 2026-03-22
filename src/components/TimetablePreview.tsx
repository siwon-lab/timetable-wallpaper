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
   return (
      <div className="flex flex-1 items-center justify-center">
         <div className="h-[766.8px] w-[353.7px] rounded-4xl border-2 border-black/10">
            <p>{title}</p>
            <p>{subtitle1}</p>
            <p>{subtitle2}</p>
            <div></div>
         </div>
      </div>
   );
}
