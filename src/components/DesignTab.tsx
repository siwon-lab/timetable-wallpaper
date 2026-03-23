import { useDispatch, useSelector } from 'react-redux';
import { setBgColor, setTextColor, type RootState } from '../../store';

export default function DesignTab() {
   const bgColor = useSelector((state: RootState) => state.timetable.bgColor);
   const textColor = useSelector(
      (state: RootState) => state.timetable.textColor,
   );
   const dispatch = useDispatch();
   return (
      <div className="p-4">
         <div>
            <p className="mb-4 text-sm font-semibold text-black/40">
               색상 테마
            </p>
            <div className="mb-2 flex items-center">
               <label
                  className="mr-4 cursor-pointer font-medium"
                  htmlFor="bgColor"
               >
                  배경 색상
               </label>
               <input
                  className="ml-auto h-[34px] cursor-pointer rounded-lg border border-black/10 px-0.5 outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
                  id="bgColor"
                  type="color"
                  value={bgColor}
                  onChange={(e) => {
                     dispatch(setBgColor(e.target.value));
                  }}
               />
            </div>
            <div className="flex items-center">
               <label
                  className="mr-4 cursor-pointer font-medium"
                  htmlFor="textColor"
               >
                  글자 색상
               </label>
               <input
                  className="ml-auto h-[34px] cursor-pointer rounded-lg border border-black/10 px-0.5 outline-none hover:bg-black/5 focus:border-emerald-400 focus:bg-transparent"
                  id="textColor"
                  type="color"
                  value={textColor}
                  onChange={(e) => {
                     dispatch(setTextColor(e.target.value));
                  }}
               />
            </div>
            {/* 같은 셀 병합 */}
            {/* 시간대 시간 사용 */}
            {/* 과목 색상 사용 */}
            {/* 시간표 전체 테두리 사용 */}
            {/* 글자 가운데/좌/우 정렬 */}
         </div>
      </div>
   );
}
