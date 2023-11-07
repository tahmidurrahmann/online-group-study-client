import { useLoaderData } from "react-router-dom";
import AllAssignment from "./AllAssignment";
import { useEffect, useState } from "react";

const AllAssignments = () => {

    const submittedData = useLoaderData();

    const [assignmentData, setAssignmentData] = useState(submittedData);
    const [difficultLevel, setDifficultLevel] = useState("all");
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const numberOfPage = Math.ceil(totalCount / itemsPerPage);

    const pages = [];
    for (let i = 0; i < numberOfPage; i++) {
        pages.push(i)
    }

    useEffect(() => {
        fetch('http://localhost:5010/assignmentCount')
            .then(res => res.json())
            .then(data => setTotalCount(data?.count))
    }, [])

    useEffect(()=>{
        fetch(`http://localhost:5010/create-assignment?page=${currentPage}&items=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setAssignmentData(data))
    },[currentPage,itemsPerPage])

    const handleSelectOption = (e) => {
        setItemsPerPage(e.target.value);
        setCurrentPage(0);
    }

    const handleDifficultLevel = (e) => {
        setDifficultLevel(e.target.value);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        if (difficultLevel === "all") {
            setAssignmentData(submittedData);
        }
        else {
            const levels = submittedData.filter(level => level.difficult === difficultLevel);
            console.log(levels, difficultLevel);
            setAssignmentData(levels)
        }
    }, [submittedData, difficultLevel])

    return (
        <div className="container mx-auto">
            <select className="w-2/5 mx-auto lg:w-1/5 ml-6 mt-10 bg-gradient-to-r from-white to-gray-200 border p-2 rounded-lg" onChange={handleDifficultLevel} id="">
                <option value="all">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 container mx-auto">
                {
                    assignmentData?.map((assignment, index) => <AllAssignment key={index} assignment={assignment} assignmentData={assignmentData} setAssignmentData={setAssignmentData}></AllAssignment>)
                }
            </div>
            <div className="flex flex-wrap gap-3 justify-center items-center my-6"> <button onClick={handlePrevPage} className="gap-3 px-5 py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3">Prev</button>
                {pages.map(page => <button className={currentPage === page ? 'gap-3 px-5 py-1 text-white bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg  mb-3 font-bold' : "gap-3 px-5 py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3"} onClick={() => setCurrentPage(page)} key={page}>{page}</button>)} <button onClick={handleNextPage} className="gap-3 px-5 py-1 hover:animate-background hover:text-white hover:bg-gradient-to-r from-[#DD2955] to-orange-800 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3">Next</button>
                <select className="gap-3 px-5 py-1 rounded-lg border border-[#DD2955] text-[#DD2955] mb-3" onChange={handleSelectOption} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default AllAssignments;