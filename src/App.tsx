import './App.css';
import SubjectsTab from './components/SubjectsTab';
import DesignTab from './components/DesignTab';
import DaysTab from './components/DaysTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faBookBookmark,
   faPaintBrush,
   faCalendar,
   faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import TimetablePreview from './components/TimetablePreview';

const tabClass =
   'cursor-pointer rounded-lg py-2 text-black/20 outline-none hover:text-black/40 data-focus:bg-emerald-400/10 data-selected:font-semibold data-selected:text-emerald-400';
// 'cursor-pointer rounded-lg py-2 text-black/20 outline-none hover:text-black/30 hover:bg-black/5 data-selected:bg-emerald-400/10 data-selected:font-semibold data-selected:text-emerald-400'
// 'cursor-pointer rounded-lg py-2 text-black/20 outline-none hover:text-black/40 data-focus:bg-black/5 data-selected:bg-emerald-400/10 data-selected:font-semibold data-selected:text-emerald-400'
const tabPanelClass =
   'outline-none focus-visible:bg-emerald-400/20 flex-1 overflow-y-auto min-h-0';

function App() {
   return (
      <div className="flex h-screen flex-col">
         <nav className="border-b border-black/10 px-6 py-4">
            <span className="text-2xl font-bold">시간표 제작</span>
         </nav>
         <div className="flex flex-1 overflow-hidden">
            <TabGroup className="flex">
               <TabList className="flex w-20 flex-col gap-1 border-r border-black/10 p-2">
                  <Tab className={tabClass}>
                     <FontAwesomeIcon
                        className="text-xl"
                        icon={faBookBookmark}
                     />
                     <p className="text-sm">과목</p>
                  </Tab>
                  <Tab className={tabClass}>
                     <FontAwesomeIcon className="text-xl" icon={faPaintBrush} />
                     <p className="text-sm">디자인</p>
                  </Tab>
                  <Tab className={tabClass}>
                     <FontAwesomeIcon className="text-xl" icon={faCalendar} />
                     <p className="text-sm">시간</p>
                  </Tab>
                  <Tab className={tabClass}>
                     <FontAwesomeIcon
                        className="text-xl"
                        icon={faArrowUpFromBracket}
                     />
                     <p className="text-sm">내보내기</p>
                  </Tab>
               </TabList>
               <TabPanels className="flex w-75 flex-col border-r border-black/10">
                  <TabPanel className={tabPanelClass}>
                     <SubjectsTab />
                  </TabPanel>
                  <TabPanel className={tabPanelClass}>
                     <DesignTab />
                  </TabPanel>
                  <TabPanel className={tabPanelClass}>
                     <DaysTab />
                  </TabPanel>
                  <TabPanel className={tabPanelClass}></TabPanel>
                  <div className="flex-shrink-0 border-t border-black/10 px-6 pt-2 pb-4">
                     <p className="mb-1 text-center font-semibold text-emerald-400">
                        잠깐! 내보내기 전에 다 확인하셨나요?
                     </p>
                     <button className="w-full cursor-pointer rounded-lg bg-emerald-400 py-2 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300">
                        <FontAwesomeIcon
                           className="mr-2 text-xl"
                           icon={faArrowUpFromBracket}
                        />
                        내보내기
                     </button>
                  </div>
               </TabPanels>
            </TabGroup>
            <TimetablePreview />
         </div>
      </div>
   );
}

export default App;
