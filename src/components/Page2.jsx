import React, { useEffect, useRef, useState } from 'react'
import WebViewer from '@pdftron/webviewer'
import './page2.css'
function Page2() {
  const demo = {
    x: null,
    y: null,
    height: null,
    width: null,
    btn: null
  }
  const viewer = useRef(null);
  const [selecetedButton, setSelectedButton] = useState(null);
  const [currentSelecetedData, setCurrentSelecetedData] = useState(demo)
  const [data, setData] = useState([])

  // handle the button click
  const handleSelectButtton = (btn) => {
    setSelectedButton(btn)
  }
  // for fecth the data from localstorage
  useEffect(() => {
    const fecthData = JSON.parse(localStorage.getItem("annotData"))
    setData(fecthData)
  }, [])

  // push the data into data useState when the rectangle annotate 
  useEffect(() => {
    if (currentSelecetedData.x != null) {
      if (selecetedButton != null) {
        setData([...data, { ...currentSelecetedData, btn: selecetedButton }])
      }
      else
        alert(" please click title or author button")
    }
  }, [currentSelecetedData])


  //  set data on local storage
  useEffect(() => {
    if (data.length > 0)
      localStorage.setItem("annotData", JSON.stringify(data))

  }, [data])


  // pdf viewer
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: 'https://arxiv.org/pdf/2212.08011.pdf'
      },
      viewer.current,
    ).then((instance) => {
      const { annotationManager } = instance.Core;
      instance.UI.setActiveHeaderGroup('toolbarGroup-Annotate')

      instance.UI.disableElements(['toolbarGroup-Shapes', 'toolbarGroup-Insert', 'toolbarGroup-Measure', ' toolbarGroup-Edit', 'toolbarGroup-Edit', 'toolbarGroup-View', 'toolbarGroup-Forms', 'toolbarGroup-FillAndSign',])
     
      instance.UI.disableElements(
        [
          'menuButton',
          'leftPanelButton',
          'viewControlsButton',
          'zoomOverlayButton',
          'panToolButton',
          'selectToolButton',
          'searchButton',
          'toggleNotesButton',
          'ribbons',
          'underlineToolGroupButton',
          'highlightToolGroupButton',
          'freeTextToolGroupButton',
          'freeHandToolGroupButton',
          'stickyToolGroupButton',
          'freeHandHighlightToolGroupButton',
          'squigglyToolGroupButton',
          'strikeoutToolGroupButton',
          'toolsOverlay',
          'undoButton',
          'redoButton',
          'eraserToolButton'
        ])
      annotationManager.addEventListener('annotationChanged', (annotations, action) => {
        annotations.forEach((annot) => {
          if (annot.Subject === 'Rectangle') {
            setCurrentSelecetedData(
              {
                x: Math.round(annot.xA),
                y: Math.round(annot.yA),
                width: Math.round(annot.xv),
                height: Math.round(annot.wv)
              })
          }
        })
      })
    }).catch(error => {
      console.log(error);
    })
  }, [])



  return (
    <div>
      <div className="container">
        <div className="leftPart">
          <div className="labelDiv">
            <h1>Label</h1>
            <div className="buttons">
              <button className="title" onClick={() => handleSelectButtton('title')}>Title</button>
              <button className="author" onClick={() => handleSelectButtton('author')}>Author</button>
            </div>
          </div>
          <div className="BoxesDiv">
            <h1>Boxes</h1>
            <div className="Box_contents">
              {data.map((row) => (
                <div className="Box_content">
                  <p>x : {row.x},</p>
                  <p>y : {row.y},</p>
                  <p> height:{row.height}</p>
                  <p> width:{row.width}</p>
                  <button className={row.btn === 'author' ? "author" : 'title'}>{row.btn}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rightPart">
          <dir id='viewer' ref={viewer}></dir>
        </div>
      </div>
    </div>
  )
}

export default Page2