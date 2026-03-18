import { useState } from 'react';
import './App.css';

function App() {
   // const w = 300;
   // const h = Math.round((300 * 19.5) / 9);
   const [days, setDays] = useState<keyof typeof daysMap>('weekdays');
   const [periods, setPeriods] = useState(7);
   const [bgColor, setBgColor] = useState('white');
   const daysMap: { [key: string]: string[] } = {
      weekdays: ['월', '화', '수', '목', '금'],
      week: ['일', '월', '화', '수', '목', '금', '토'],
   };
   const bgMap = [
      { color: 'white', name: '흰색', class: 'bg-white' },
      { color: 'red', name: '빨간색', class: 'bg-red-300' },
      { color: 'blue', name: '파란색', class: 'bg-blue-300' },
      { color: 'yellow', name: '노란색', class: 'bg-yellow-300' },
   ];
   return (
      <>
         <div className="flex h-screen w-full bg-[#eee]">
            <div className="flex h-full w-[35%] items-center justify-center p-12 pr-6">
               <div className="flex h-full w-full rounded-4xl border-2 border-gray-300 bg-gray-200 p-10">
                  <div className="flex-1">
                     <div className="flex h-8 w-full items-center">
                        <span className="text-xl font-semibold">배경색</span>
                     </div>
                     <div className="mt-4 flex h-8 w-full items-center">
                        <span className="text-xl font-semibold">교시</span>
                     </div>
                     <div className="mt-4 flex h-8 w-full items-center">
                        <span className="text-xl font-semibold">요일</span>
                     </div>
                  </div>
                  <div className="flex-1">
                     <div className="flex h-8 w-full items-center">
                        <select
                           className="text-xl"
                           value={bgColor}
                           onChange={(e) => {
                              setBgColor(e.target.value);
                           }}
                        >
                           {bgMap.map((obj) => (
                              <option value={obj.color}>{obj.name}</option>
                           ))}
                        </select>
                     </div>
                     <div className="mt-4 flex h-8 w-full items-center">
                        <button
                           className="h-8 w-8 cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-200"
                           onClick={() => {
                              if (periods > 0) {
                                 setPeriods((prev) => prev - 1);
                              }
                           }}
                        >
                           -
                        </button>
                        <span className="mx-2">{periods}교시</span>
                        <button
                           className="h-8 w-8 cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-200"
                           onClick={() => {
                              setPeriods((prev) => prev + 1);
                           }}
                        >
                           +
                        </button>
                     </div>
                     <div className="mt-4 flex h-8 w-full items-center">
                        <select
                           className="text-xl"
                           value={days}
                           onChange={(e) => {
                              setDays(e.target.value);
                           }}
                        >
                           <option value="weekdays">월 ~ 금</option>
                           <option value="week">일 ~ 토</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex h-full w-[65%] items-center justify-center p-12 pl-6">
               <div className="flex h-full w-full flex-col items-center justify-center rounded-4xl border-2 border-gray-300 bg-gray-200">
                  <h1 className="text-2xl font-semibold">시간표</h1>
                  <table
                     className={`h-160 w-140 table-auto border-collapse ${bgMap.find((obj) => obj.color === bgColor)?.class}`}
                  >
                     <thead>
                        <tr>
                           <th className="w-20 border text-center align-middle"></th>
                           {daysMap[days].map((day) => (
                              <th
                                 className="h-16 border text-center align-middle"
                                 key={day}
                              >
                                 {day}
                              </th>
                           ))}
                        </tr>
                     </thead>
                     <tbody>
                        {Array.from({ length: periods }, (_, i) => i + 1).map(
                           (period) => (
                              <tr key={period}>
                                 <td className="border text-center align-middle">
                                    {period}교시
                                 </td>
                                 {daysMap[days].map((day) => (
                                    <td
                                       className="border text-center align-middle"
                                       key={day}
                                    >
                                       <input
                                          className="h-full w-full text-center outline-none"
                                          type="text"
                                       />
                                    </td>
                                 ))}
                              </tr>
                           ),
                        )}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
