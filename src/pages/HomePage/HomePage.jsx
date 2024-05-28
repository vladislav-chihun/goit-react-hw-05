import {Link, NavLink, Route, Routes} from "react-router-dom"
export default function HomePage() {
    return (
        <div>
            <ul>
                <li><NavLink to="/"></NavLink></li>
                <li><NavLink to="/movies"></NavLink></li>
                
            </ul>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path=""/>
            </Routes>
        </div>
    )
}