import React from 'react'

function NewButton() {
  return (
    <button className="m-2 relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none
     focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-red-700">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
   bg-[conic-gradient(from_90deg_at_50%_50%,#fc0303_0%,#301515_50%,#8a3d3d_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center
   justify-center rounded-xl bg-black-200 px-3 py-1 text-sm font-medium
    text-white backdrop-blur-3xl">
    My Works
  </span>
</button>
  )
}

export default NewButton