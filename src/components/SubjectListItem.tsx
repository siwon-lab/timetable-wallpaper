import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function SubjectListItem() {
   return (
      <div className="flex w-full items-center gap-2 rounded-lg border border-black/10 p-2 transition-colors focus-within:border-emerald-400 hover:border-emerald-400">
         <div className="h-4 w-4 rounded-full border border-black/10 p-0.5">
            <div className="h-full w-full rounded-full bg-yellow-300"></div>
         </div>
         <input
            className="min-w-0 flex-1 rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
            type="text"
            autoComplete='off'
            value="수학"
         />
         <input
            className="h-[34px] cursor-pointer rounded-lg border border-black/10 px-0.5 outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
            id="color"
            type="color"
            value="#ffdf20"
         />
         <button className="mr-0.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded text-sm font-extralight text-black/20 transition-colors outline-none hover:bg-red-500/10 hover:text-red-500 focus-visible:bg-red-500/10 focus-visible:text-red-500">
            <FontAwesomeIcon icon={faXmark} />
         </button>
      </div>
   );
}
