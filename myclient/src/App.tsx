import { useState } from 'react'

import './App.css'
import StarCard from "./components/StarCard/StarCard.tsx";

const starList = [
    {
        id:"0001",
        name: "Ma Dong-Seok",
        origin: "Korea",
        work: ["The Outlaws(2017)", "Train To Busan(2016)"],
        url: ["https://example.com", "https://twitter.com/janedoe"],
        extraInfo: true,
        fanbase: 1500000,
        netWorth: 5000000,
        photoUrl: "MaDong.png" // This will resolve to /images/jane.jpg
    },
    {
        id:"0002",
        name: "Gong Yoo",
        origin: "Korea",
        work: ["Guardian: The Lonely and Great God(2017)", "Train To Busan(2016)"],
        url: ["https://example.com", "https://twitter.com/janedoe"],
        extraInfo: true,
        fanbase: 1500000,
        netWorth: 5000000,
        photoUrl: "GongYoo.png" // This will resolve to /images/jane.jpg
    },
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className={"font-bold text-blue-600"}>Vite + React List</h1>
        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src="src/assets/images/MaDong.png"
                        alt="Modern building architecture"
                    />
                </div>
                <div className="p-8">
                    <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                    <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                        Incredible accommodation for your team
                    </a>
                    <p className="mt-2 text-gray-500">
                        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                        places to do just that.
                    </p>
                </div>

            </div>
            {starList.map(person => <StarCard person={person}/>)}

        </div>

    </>
  )
}

export default App
