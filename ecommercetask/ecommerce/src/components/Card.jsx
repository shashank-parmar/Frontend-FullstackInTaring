import React from 'react'

export default function Card({ src, title,alt ,size}) {
  return (
    <div>
      <div className="w-[300px] rounded-md border" >
      <img className="h-[200px] w-full rounded-md object-cover" src={src} alt={alt} />
      <div className="card-body">
        <h5 className="text-lg font-semibold">{title}</h5>
        <h5 className="text-lg font-semibold">{size}</h5>
        <p className="mt-3 text-sm text-gray-600">
          Some quick example text to build on the card title and make up the
          bulk of the content.  
        </p>
        <a href="#" className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Go somewhere
        </a>
      </div>
    </div>
    </div>
  )
}

// import React from 'react'

// export function Card({ src, title,alt ,size}) {
//   return (
//     <div className="w-[300px] rounded-md border">
//       <img
//        src={src} alt={alt}
//         className="h-[200px] w-full rounded-md object-cover"
//       />
//       <div className="p-4">
//         <h1 className="text-lg font-semibold">{title}</h1>
//         <h1 className="text-lg font-semibold">{size}</h1>
//         <p className="mt-3 text-sm text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//         </p>
//         <button
//           type="button"
//           className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//         >
//           Buy
//         </button>
//       </div>
//     </div>
//   )
// }
