import './App.css';
import TabButton from './components/TabButton';

function App() {
   return (
      <div className="flex h-screen">
         <aside className="w-75 border-r border-black/10">
            <header className="border-b border-black/10 px-4 py-6">
               <h1 className="text-2xl font-bold">시간표 제작</h1>
            </header>
            <div className="flex gap-1 border-b border-black/10 px-4 py-3">
               <TabButton text="과목" />
               <TabButton text="디자인" />
               <TabButton text="레이아웃" />
               <TabButton text="내보내기" />
            </div>
            <div className="p-4">
               <div className="flex flex-col">
                  <p className="mb-4 text-gray-500">헤더</p>
                  <label className="mb-1 font-semibold" htmlFor="title">
                     제목
                  </label>
                  <input
                     className="mb-2 rounded-lg border border-black/10 px-2 py-1 outline-none"
                     id="title"
                     type="text"
                     defaultValue="시간표"
                  />
                  <div className="flex gap-1">
                     <div className="flex min-w-0 flex-1 flex-col">
                        <label
                           className="mb-1 font-semibold"
                           htmlFor="subtitle1"
                        >
                           부제목1
                        </label>
                        <input
                           className="rounded-lg border border-black/10 px-2 py-1 outline-none"
                           id="subtitle1"
                           type="text"
                           defaultValue="1학년"
                        />
                     </div>
                     <div className="flex min-w-0 flex-1 flex-col">
                        <label
                           className="mb-1 font-semibold"
                           htmlFor="subtitle2"
                        >
                           부제목2
                        </label>
                        <input
                           className="rounded-lg border border-black/10 px-2 py-1 outline-none"
                           id="subtitle2"
                           type="text"
                           defaultValue="2026"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </aside>
         <div className="flex-1">
            <nav className="border-b border-black/10 px-8 py-4">
               <span className="text-xl font-semibold">미리보기</span>
            </nav>
         </div>
      </div>
   );
}

export default App;
