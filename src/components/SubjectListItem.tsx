export default function SubjectListItem() {
   return (
      <div className="flex w-full items-center gap-2 rounded-lg border border-black/10 p-2 transition-colors hover:bg-black/5 focus-within:hover:bg-transparent">
         <div className="h-4 w-4 rounded-full border border-black/10 p-0.5">
            <div className="h-full w-full rounded-full bg-yellow-300"></div>
         </div>
         <input
            className="min-w-0 flex-1 rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none focus:border-emerald-400"
            type="text"
            value="수학"
         />
         <input
            className="h-[34px] cursor-pointer rounded-lg border border-black/10 px-0.5 focus:border-emerald-400"
            id="color"
            type="color"
            value="#ffdf20"
         />
      </div>
   );
}
