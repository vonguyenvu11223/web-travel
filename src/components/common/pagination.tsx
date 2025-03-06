"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Pagination = () => {
    // Global primary color class

    const primaryBgColor = "bg-primary";

    // Sample data
    const sampleData = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(sampleData.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (page:any) => {
        setCurrentPage(page);
    };

    return (
        <div className="py-6 font-sans">
            {/* Pagination controls */}
            <div className="flex justify-center space-x-2 mt-4">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${page === currentPage
                            ? `${primaryBgColor} text-white`
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        {page}
                    </Button>
                ))}

                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 flex items-center rounded-lg font-medium transition-all ${currentPage === totalPages ? "bg-gray-200 text-gray-400" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                >
                   
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default Pagination;
