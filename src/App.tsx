import { useState } from 'react';
import './App.css';

function App() {
   // const w = 300;
   // const h = Math.round((300 * 19.5) / 9);
   const days = ['월', '화', '수', '목', '금'];
   const [periods, setPeriods] = useState(7);
   const [bgColor, setBgColor] = useState('white');
   const bgMap = [
      { color: 'white', name: '흰색', class: 'bg-white' },
      { color: 'red', name: '빨간색', class: 'bg-red-300' },
      { color: 'blue', name: '파란색', class: 'bg-blue-300' },
   ];
   return (
      <>
         <div className="flex h-screen w-full bg-[#eee]">
            <div className="flex h-full w-[30%] items-center justify-center p-12 pr-6">
               <div className="flex h-full w-full rounded-4xl border-2 border-gray-300 bg-gray-200 px-4 py-10">
                  <div className="flex-1">
                     <div className="flex h-8 w-full items-center justify-center">
                        <span className="text-xl font-semibold">배경색</span>
                     </div>
                     <div className="mt-4 flex h-8 w-full items-center justify-center">
                        <span className="text-xl font-semibold">교시</span>
                     </div>
                  </div>
                  <div className="flex-1">
                     <div className="flex h-8 w-full items-center justify-center">
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
                     <div className="mt-4 flex h-8 w-full items-center justify-center">
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
                        <span className="mx-2">{periods}</span>
                        <button
                           className="h-8 w-8 cursor-pointer rounded-lg border-2 border-gray-300 bg-gray-200"
                           onClick={() => {
                              setPeriods((prev) => prev + 1);
                           }}
                        >
                           +
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex h-full w-[70%] items-center justify-center p-12 pl-6">
               <div className="flex h-full w-full flex-col items-center justify-center rounded-4xl border-2 border-gray-300 bg-gray-200">
                  <h1 className="text-2xl font-semibold">시간표</h1>
                  <table
                     className={`h-160 w-140 table-auto border-collapse ${bgMap.find((obj) => obj.color === bgColor)?.class}`}
                  >
                     <thead>
                        <tr>
                           <th className="border text-center align-middle w-20"></th>
                           {days.map((day) => (
                              <th
                                 className="border text-center align-middle h-16"
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
                                 {days.map((day) => (
                                    <td
                                       className="border text-center align-middle"
                                       key={day}
                                    >
                                       <input className='w-full h-full outline-none text-center' type="text" />
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
