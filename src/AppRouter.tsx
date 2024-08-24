import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./Layouts/LayoutMain";
import Index from "./views/Index";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes >
            <Route element={<LayoutMain />} >
              <Route element={<Index />} path="/" />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
