import { Routes, Route } from "react-router-dom"
import { PageHome, PageCats, PageLayout } from "../pages"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="/cats" element={<PageCats/>} />
            </Route>
        </Routes>
    )
}