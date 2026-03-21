import './App.css';
import SubjectsTab from './components/SubjectsTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faBookBookmark,
   faPaintBrush,
   faCalendar,
   faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';

function App() {
   return (
      <div className="flex h-screen flex-col">
         <nav className="border-b border-black/10 px-6 py-4">
            <span className="text-2xl font-bold">시간표 제작</span>
         </nav>
         <div className="flex flex-1">
            <aside className="flex">
               <div className="flex h-full w-22 flex-col gap-1 border-r border-black/10 px-2 py-4">
                  <button className="cursor-pointer p-2 text-emerald-400">
                     <FontAwesomeIcon
                        className="text-xl"
                        icon={faBookBookmark}
                     />
                     <p className="text-sm font-semibold">과목</p>
                  </button>
                  <button className="cursor-pointer p-2 text-black/20 hover:text-black/40">
                     <FontAwesomeIcon className="text-xl" icon={faPaintBrush} />
                     <p className="text-sm">디자인</p>
                  </button>
                  <button className="cursor-pointer p-2 text-black/20 hover:text-black/40">
                     <FontAwesomeIcon className="text-xl" icon={faCalendar} />
                     <p className="text-sm">요일</p>
                  </button>
                  <button className="cursor-pointer p-2 text-black/20 hover:text-black/40">
                     <FontAwesomeIcon
                        className="text-xl"
                        icon={faArrowUpFromBracket}
                     />
                     <p className="text-sm">내보내기</p>
                  </button>
               </div>
               <div className="h-full w-75 border-r border-black/10">
                  <SubjectsTab />
               </div>
            </aside>
            <div className="flex-1"></div>
         </div>
      </div>
   );
}

export default App;
