import React from "react";

const RatingFilter = () => {
    return (
        <div className="filter-spacing">
            <div className="header-container mb-5 mt-5">
                <h2 className="mb-3 font-bold text-text1">Rating</h2>
            </div>
            <div className="collapsible-content-container">
                <div data-automation="filter-panel-filter-set-RATINGS">
                    {[{ label: "", value: "FIVE_STAR", stars: 5 },
                    { label: " & up", value: "FOUR_STAR", stars: 4 },
                    { label: " & up", value: "THREE_STAR", stars: 3 }].map((item) => (
                        <div
                            className="one-column small-spacing-options last-visible-options-group"
                            key={item.value}
                        >
                            <label className="checkbox-item flex items-center space-x-2">
                                <input
                                    name="RATINGS"
                                    className="radio md accent-primary"
                                    type="radio"
                                    value={item.value}
                                />
                                <div className="flex items-center space-x-1">
                                    {[...Array(item.stars)].map((_, index) => (
                                        <svg
                                            key={index}
                                            viewBox="0 0 15 15"
                                            fill="currentColor"
                                            className="w-4 h-4 text-primary"
                                        >
                                            <path
                                                clipRule="evenodd"
                                                d="M7.5 0a.77.77 0 00-.701.456L5.087 4.083a.785.785 0 01-.588.448l-3.827.582a.828.828 0 00-.433 1.395L3.008 9.33c.185.192.269.46.225.724l-.654 3.987a.809.809 0 00.77.958.751.751 0 00.364-.096l3.423-1.882a.752.752 0 01.728 0l3.423 1.882a.75.75 0 00.363.096.809.809 0 00.771-.958l-.654-3.987a.841.841 0 01.225-.724l2.77-2.823a.828.828 0 00-.434-1.396l-3.827-.581a.785.785 0 01-.589-.448L8.201.456A.77.77 0 007.5 0z"
                                            ></path>
                                        </svg>
                                    ))}
                                    <span>{item.label}</span>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RatingFilter;
