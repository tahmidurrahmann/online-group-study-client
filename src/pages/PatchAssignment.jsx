import { useEffect, useState } from "react";
// import { Document, Page } from "react-pdf";
import { useNavigate, useParams } from "react-router-dom";

const PatchAssignment = () => {

    const { id } = useParams()
    const [patchData, setPatchData] = useState([]);

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // const onDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages);
    // };

    // const goToPrevPage = () => {
    //     setPageNumber((prevPageNumber) => prevPageNumber - 1);
    // };

    // const goToNextPage = () => {
    //     setPageNumber((prevPageNumber) => prevPageNumber + 1);
    // };

    useEffect(() => {
        fetch(`https://online-group-study-server-blush.vercel.app/take-assignment/${id}`)
            .then(res => res.json())
            .then(data => setPatchData(data))
    }, [id])

    const { pdf, quickNote } = patchData;
    console.log(pdf);


    const navigate = useNavigate();

    const handleMarkSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const giveMark = form.giveMark.value;
        const feedback = form.feedback.value;
        const status = "Completed";
        const submittedValue = { giveMark, feedback, status };
        console.log(submittedValue);
        fetch(`https://online-group-study-server-blush.vercel.app/take-assignment/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submittedValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    navigate('/myAssignments')
                }
            })
    }

    return (
        <div>
            <h3 className="font-bold text-lg text-center mt-12">PDF LINK :<a className="text-blue-600" href={pdf}><span className="ml-3"> Click here for see this PDF</span></a></h3>
            <p className="w-1/2 mx-auto py-4 text-lg font-semibold">Quick Note : <span className="ml-3">{quickNote}</span></p>
            {/* <Document file={pdfURL}>
                <Page pageNumber={1} />
            </Document> */}
            {/* <div>
                <nav>
                    <button onClick={goToPrevPage}>Prev</button>
                    <button onClick={goToNextPage}>Next</button>
                </nav>

                <div style={{ width: 600 }}>
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>

                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div> */}
            <form onSubmit={handleMarkSubmit} className="w-1/2 mx-auto min-h-screen">
                <div className="form-control my-10">
                    <label className="label">
                        <span className="label-text">Give Marks</span>
                    </label>
                    <input type="text" name="giveMark" placeholder="Give Marks" className="input input-bordered bg-gradient-to-r from-white to-gray-400" required /> <br />
                </div>
                <textarea name="feedback" className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" placeholder="Give your Feedback here" cols="3" rows="3"></textarea>
                <input className="w-full py-2 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default PatchAssignment;