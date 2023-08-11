import { Routes, Route } from "react-router-dom"
import { PageHome, PageCats } from "../pages"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/Cats" element={<PageCats />} >
                <Route path="" element={<PageHome />} />
            </Route>
        </Routes>
    )
}