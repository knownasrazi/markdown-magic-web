import { useState } from "react";
export default function App(){
  const [md,setMd]=useState("# Hello\n\nLive **markdown** magic ✨");
  function toHtml(s:string){ return s.replace(/^# (.*)/gm,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br/>"); }
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-5xl px-6 py-8 flex gap-6">
        <textarea value={md} onChange={e=>setMd(e.target.value)} rows={12} className="flex-1 rounded-2xl border border-[#ebe7e0] p-3 text-sm font-mono" />
        <div className="flex-1 rounded-2xl border border-[#ebe7e0] bg-white p-6 prose text-sm" dangerouslySetInnerHTML={{__html: toHtml(md)}} />
      </div>
    </main>
  );
}
