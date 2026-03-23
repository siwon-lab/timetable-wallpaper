import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { removePeriod, updatePeriod, type Period } from '../../store';
import { useDispatch } from 'react-redux';

interface Props {
   period: Period;
   index: number;
}

export default function PeriodListItem({ period, index }: Props) {
   const { id, name, time } = period;
   const dispatch = useDispatch();

   return (
      <div className="flex w-full items-center gap-2 rounded-lg border border-black/10 p-2 transition-colors focus-within:border-emerald-400 hover:border-emerald-400">
         <p className="font-medium">{index}.</p>
         <input
            className="min-w-0 flex-3 rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
            type="text"
            autoComplete="off"
            value={name}
            onChange={(e) =>
               dispatch(updatePeriod({ id, name: e.target.value, time }))
            }
            placeholder="n교시"
         />
         <input
            className="min-w-0 flex-5 rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
            type="text"
            autoComplete="off"
            value={time}
            onChange={(e) =>
               dispatch(updatePeriod({ id, name, time: e.target.value }))
            }
            placeholder="시간"
         />
         <button
            className="mr-0.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded text-sm font-extralight text-black/20 transition-colors outline-none hover:bg-red-500/10 hover:text-red-500 focus-visible:bg-red-500/10 focus-visible:text-red-500"
            onClick={() => {
               dispatch(removePeriod(id));
            }}
         >
            <FontAwesomeIcon icon={faXmark} />
         </button>
      </div>
   );
}
