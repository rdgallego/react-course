import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, Hero, MarvelPage, SearchHero } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path="dc" element={<DCPage/>}/>
            <Route path="search-hero" element={<SearchHero/>}/>
            <Route path="hero/:heroId" element={<Hero/>}/>

            <Route path="/" element={<Navigate to="/marvel"/>}/>
        </Routes>
        </div>

    </>
  )
}
