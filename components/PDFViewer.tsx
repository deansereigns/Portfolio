"use client";

import {Document, Page, pdfjs} from "react-pdf";
import { useEffect,useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc=`//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFViewer(){
    const [width, setWidth] = useState(800);

    useEffect(()=>{
        setWidth(window.innerWidth*0.9);
    },[]);

    return (
        <div className="flex justify-center items-center w-full h-full">
            <Document file="/cv/cv_mayank_thakur.pdf">
                <Page pageNumber={1} width = {width}/>
            </Document>
        </div>
    );
}