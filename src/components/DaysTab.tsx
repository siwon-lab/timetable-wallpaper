import { Switch } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addPeriod, setDays, type RootState } from '../../store';
import PeriodListItem from './PeriodListItem';

export default function DaysTab() {
   const days = useSelector((state: RootState) => state.days);
   const periods = useSelector((state: RootState) => state.periods);
   const dispatch = useDispatch();

   return (
      <div className="p-4">
         <div>
            <p className="mb-4 text-sm font-semibold text-black/40">
               요일 설정
            </p>
            <div className="flex flex-col gap-2">
               {days.map((d) => (
                  <div className="flex" key={d.day}>
                     <label
                        className="mr-4 cursor-pointer font-medium"
                        htmlFor={d.day}
                     >
                        {d.day}요일
                     </label>
                     <Switch
                        className={`${d.enabled ? 'bg-emerald-400' : 'bg-black/10'} ml-auto flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors hover:ring hover:ring-emerald-400`}
                        id={d.day}
                        checked={d.enabled}
                        onChange={() => {
                           dispatch(setDays(d.day));
                        }}
                     >
                        <span
                           className={`${d.enabled ? 'translate-x-6' : 'translate-x-1'} h-4 w-4 rounded-full bg-white transition-transform`}
                        />
                     </Switch>
                  </div>
               ))}
            </div>
         </div>
         <div className="my-4 h-[1px] w-full bg-black/10"></div>
         <div>
            <p className="mb-4 text-sm font-semibold text-black/40">
               시간대 설정
            </p>
            <div className="flex flex-col gap-2">
               {periods.map((p, i) => (
                  <PeriodListItem key={p.id} period={p} index={i + 1} />
               ))}
               <button
                  className="w-full cursor-pointer rounded-lg border border-dashed border-black/10 py-2 text-black/20 transition-colors outline-none hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300 focus-visible:border-emerald-400 focus-visible:bg-emerald-400/10 focus-visible:text-emerald-300"
                  onClick={() => {
                     dispatch(addPeriod());
                  }}
               >
                  <p className="text-center font-medium">+ 시간대 추가</p>
               </button>
            </div>
         </div>
      </div>
   );
}
