export default function SubjectListItem() {
   return (
      <div className="flex w-full items-center gap-2 rounded-lg border border-black/10 p-2">
         <label
            className="h-4 w-4 cursor-pointer rounded-full border border-black/10 p-0.5"
            htmlFor="color"
         >
            <div className="h-full w-full rounded-full bg-yellow-300"></div>
         </label>
         <input
            className="min-w-0 flex-1 rounded-lg border border-black/10 px-2 py-1 outline-none"
            type="text"
            value="수학"
         />
         <input
            className="h-[34px] cursor-pointer rounded-lg border border-black/10 px-0.5"
            id="color"
            type="color"
            value="#ffdf20"
         />
      </div>
   );
}
