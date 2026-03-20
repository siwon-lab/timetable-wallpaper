import SubjectListItem from './SubjectListItem';

export default function SubjectsTab() {
   return (
      <div className="p-4">
         <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold text-gray-500">헤더</p>
            <label className="mb-1" htmlFor="title">
               제목
            </label>
            <input
               className="mb-2 rounded-lg border border-black/10 px-2 py-1 outline-none"
               id="title"
               type="text"
               value="시간표"
            />
            <div className="flex gap-1">
               <div className="flex min-w-0 flex-1 flex-col">
                  <label className="mb-1" htmlFor="subtitle1">
                     부제목1
                  </label>
                  <input
                     className="rounded-lg border border-black/10 px-2 py-1 outline-none"
                     id="subtitle1"
                     type="text"
                     value="1학년"
                  />
               </div>
               <div className="flex min-w-0 flex-1 flex-col">
                  <label className="mb-1" htmlFor="subtitle2">
                     부제목2
                  </label>
                  <input
                     className="rounded-lg border border-black/10 px-2 py-1 outline-none"
                     id="subtitle2"
                     type="text"
                     value="2026"
                  />
               </div>
            </div>
         </div>
         <div className="my-4 h-[1px] w-full bg-black/10"></div>
         <div>
            <p className="mb-4 text-sm font-semibold text-gray-500">
               과목 목록
            </p>
            <div className="flex flex-col gap-2">
               <SubjectListItem />
               <SubjectListItem />
               <SubjectListItem />
            </div>
         </div>
      </div>
   );
}
