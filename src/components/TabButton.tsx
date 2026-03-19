export default function TabButton({ text }: { text: string }) {
   return (
      <button className="flex-1 cursor-pointer rounded-lg py-2 text-sm font-semibold hover:bg-black/6">
         {text}
      </button>
   );
}
