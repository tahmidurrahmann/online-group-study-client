import { Outlet } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Footer from "./shared/Footer/Footer"

function App() {

  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
        <Footer></Footer>
      </MainLayout>
    </>
  )
}

export default App
