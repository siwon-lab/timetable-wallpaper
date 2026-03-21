export default function SubjectListItem() {
   return (
      <div className="flex w-full items-center gap-2 rounded-lg border border-black/10 p-2 transition-colors focus-within:border-emerald-400 hover:border-emerald-400">
         <div className="h-4 w-4 rounded-full border border-black/10 p-0.5">
            <div className="h-full w-full rounded-full bg-yellow-300"></div>
         </div>
         <input
            className="min-w-0 flex-1 rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
            type="text"
            value="수학"
         />
         <input
            className="h-[34px] cursor-pointer rounded-lg border border-black/10 px-0.5 outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
            id="color"
            type="color"
            value="#ffdf20"
         />
         <button className="mr-0.5 mb-1 cursor-pointer text-xl font-extralight text-black/20 hover:text-red-500 transition-colors">
            ×
         </button>
      </div>
   );
}
