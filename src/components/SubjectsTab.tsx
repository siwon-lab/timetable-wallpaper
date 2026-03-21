import SubjectListItem from './SubjectListItem';

export default function SubjectsTab() {
   return (
      <div className="p-4">
         <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold text-black/40">헤더</p>
            <label className="mb-1 w-fit" htmlFor="title">
               제목
            </label>
            <input
               className="mb-2 rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:hover:bg-transparent"
               id="title"
               type="text"
               value="시간표"
            />
            <div className="flex gap-1">
               <div className="flex min-w-0 flex-1 flex-col">
                  <label className="mb-1 w-fit" htmlFor="subtitle1">
                     부제목1
                  </label>
                  <input
                     className="rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:hover:bg-transparent"
                     id="subtitle1"
                     type="text"
                     value="1학년"
                  />
               </div>
               <div className="flex min-w-0 flex-1 flex-col">
                  <label className="mb-1 w-fit" htmlFor="subtitle2">
                     부제목2
                  </label>
                  <input
                     className="rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:hover:bg-transparent"
                     id="subtitle2"
                     type="text"
                     value="2026"
                  />
               </div>
            </div>
         </div>
         <div className="my-4 h-[1px] w-full bg-black/10"></div>
         <div>
            <p className="mb-4 text-sm font-semibold text-black/40">
               과목 목록
            </p>
            <div className="flex flex-col gap-2">
               <SubjectListItem />
               <SubjectListItem />
               <SubjectListItem />
               <button className="w-full cursor-pointer rounded-lg border border-dashed border-black/10 py-2 text-black/20 transition-colors hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300 focus-visible:border-emerald-400 focus-visible:bg-emerald-400/10 focus-visible:text-emerald-300 outline-none">
                  <p className="text-center">+ 과목 추가</p>
               </button>
            </div>
         </div>
      </div>
   );
}
