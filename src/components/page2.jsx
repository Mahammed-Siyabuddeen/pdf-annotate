import React ,{useState}from 'react'
import {useLocation} from 'react-router-dom'
import './page2.css'
import {Document,Page,pdfjs} from 'react-pdf/dist/esm/entry.webpack'
function Page2(props) {
    const Location=useLocation()
    // console.log(Location.state);
    const [pageNumber, setPageNumber] = useState(1);
    const url= "https://arxiv.org/pdf/2212.08011.pdf"

    pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    function onDocumnetLoadsuccess({numPages}){
      console.log(numPages);
    }

  return (
    <div>
      <div className="container">
        <div className="leftPart">
           <div className="labelDiv">
              <h1>Label</h1>
              <div className="buttons">
                <button className="title">Title</button>
                <button className="Author">Author</button>
              </div>
           </div>
           <div className="BoxesDiv">

           </div>
        </div>
        <div className="rightPart">
            <Document
            file=''
            onLoadSuccess={onDocumnetLoadsuccess}
            >
              <Page pageNumber={pageNumber}/>
            </Document>
        </div>
      </div>
    </div>
  )
}

export default Page2