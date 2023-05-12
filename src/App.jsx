import React from "react";
import NavBar from './pages/navbar/Navbar'
import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';
import Blog from "./pages/Blog/Blog";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar></NavBar> */}
      <PDFViewer>
        <Blog></Blog>
      </PDFViewer>

    </>
  )
}

export default App
