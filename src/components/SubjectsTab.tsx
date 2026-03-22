import SubjectListItem from './SubjectListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
   setTitle,
   setSubtitle1,
   setSubtitle2,
   addSubject,
   type RootState,
} from '../../store';

export default function SubjectsTab() {
   const title = useSelector((state: RootState) => state.timetable.title);
   const subtitle1 = useSelector(
      (state: RootState) => state.timetable.subtitle1,
   );
   const subtitle2 = useSelector(
      (state: RootState) => state.timetable.subtitle2,
   );
   const subjects = useSelector((state: RootState) => state.subjects);
   const dispatch = useDispatch();
   return (
      <div className="p-4">
         <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold text-black/40">헤더</p>
            <label className="mb-1 w-fit font-medium" htmlFor="title">
               제목
            </label>
            <input
               className="mb-2 rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:hover:bg-transparent"
               id="title"
               type="text"
               autoComplete="off"
               value={title}
               onChange={(e) => {
                  dispatch(setTitle(e.target.value));
               }}
            />
            <div className="flex gap-1">
               <div className="flex min-w-0 flex-1 flex-col">
                  <label className="mb-1 w-fit font-medium" htmlFor="subtitle1">
                     부제목1
                  </label>
                  <input
                     className="rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:hover:bg-transparent"
                     id="subtitle1"
                     type="text"
                     autoComplete="off"
                     value={subtitle1}
                     onChange={(e) => {
                        dispatch(setSubtitle1(e.target.value));
                     }}
                  />
               </div>
               <div className="flex min-w-0 flex-1 flex-col">
                  <label className="mb-1 w-fit font-medium" htmlFor="subtitle2">
                     부제목2
                  </label>
                  <input
                     className="rounded-lg border border-black/10 px-2 py-1 transition-colors outline-none hover:bg-black/5 focus:border-emerald-400 focus:hover:bg-transparent"
                     id="subtitle2"
                     type="text"
                     autoComplete="off"
                     value={subtitle2}
                     onChange={(e) => {
                        dispatch(setSubtitle2(e.target.value));
                     }}
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
               {subjects.map((s) => (
                  <SubjectListItem key={s.id} subject={s} />
               ))}
               <button
                  className="w-full cursor-pointer rounded-lg border border-dashed border-black/10 py-2 text-black/20 transition-colors outline-none hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300 focus-visible:border-emerald-400 focus-visible:bg-emerald-400/10 focus-visible:text-emerald-300"
                  onClick={() => dispatch(addSubject())}
               >
                  <p className="text-center">+ 과목 추가</p>
               </button>
            </div>
         </div>
      </div>
   );
}
