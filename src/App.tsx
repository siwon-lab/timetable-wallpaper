import './App.css';
import SubjectsTab from './components/SubjectsTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faPaintBrush, faCalendar, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

function App() {
   return (
      <div className="flex h-screen flex-col">
         <nav className="border-b border-black/10 px-6 py-4">
            <span className="text-2xl font-bold">시간표 제작</span>
         </nav>
         <div className="flex flex-1">
            <aside className="flex">
               <div className="flex h-full w-22 flex-col border-r border-black/10 py-4 px-2 gap-1">
                  <button className='cursor-pointer hover:bg-black/10 p-2 rounded-lg'>
                     <FontAwesomeIcon className='text-xl' icon={faBookBookmark}/>
                     <p className='font-semibold text-sm'>과목</p>
                  </button>
                  <button className='cursor-pointer hover:bg-black/10 p-2 rounded-lg'>
                     <FontAwesomeIcon className='text-xl' icon={faPaintBrush}/>
                     <p className='font-semibold text-sm'>디자인</p>
                  </button>
                  <button className='cursor-pointer hover:bg-black/10 p-2 rounded-lg'>
                     <FontAwesomeIcon className='text-xl' icon={faCalendar}/>
                     <p className='font-semibold text-sm'>시간</p>
                  </button>
                  <button className='cursor-pointer hover:bg-black/10 p-2 rounded-lg'>
                     <FontAwesomeIcon className='text-xl' icon={faArrowUpFromBracket}/>
                     <p className='font-semibold text-sm'>내보내기</p>
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
