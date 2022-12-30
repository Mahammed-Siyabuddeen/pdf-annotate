import React from 'react'
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, Inject } from '@syncfusion/ej2-react-pdfviewer'

function Page4() {
    return (
        <div>
            <PdfViewerComponent id="container" documentPath="https://arxiv.org/pdf/2212.08011.pdf" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>

                <Inject services={[Toolbar, Annotation, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                    Print, TextSelection, TextSearch]} />

            </PdfViewerComponent>
        </div>
    )
}

export default Page4