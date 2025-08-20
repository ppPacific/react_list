import { useState } from 'react'

import './App.css'
import StarCard from "./components/StarCard/StarCard.tsx";
import Navbar from "./components/Nav/NavBar.tsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";

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
    const Layout=()=>{

        return(
            <div className={"layout_main"}>
                <Navbar/>
                <div className={"layout_container"}>
                    {/*<div className={"menuContainer"}><Menu/></div>*/}
                    <div className={"layout_contentContainer"}>
                        <Outlet/>
                    </div>
                </div>

                {/*<Footer/>*/}
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element:<Layout/>,
            children:[
                {
                    path: "/",
                    element: (
                        <Home/>
                        // <div>
                        //   <h1>Hello World</h1>
                        //   <Link to="about">About Us</Link>
                        // </div>
                    ),
                },
                {
                    path: "about",
                    element: <About/>,
                },
                // {
                //     path: "products",
                //     element: <Products/>,
                // },
                // {
                //     path: "test",
                //     element: <Test/>,
                // },
            ]
        },
        // {
        //     path: "login",
        //     element: <Login/>
        // }

    ]);
    return <RouterProvider router={router}/>
}

export default App
