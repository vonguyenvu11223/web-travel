import React from "react";

function TravelTagCloud() {
    const travelTags = [
        { name: "Adventure", count: 10, link: "/tags/adventure" },
        { name: "Beach", count: 8, link: "/tags/beach" },
        { name: "Culture", count: 6, link: "/tags/culture" },
        { name: "Cuisine", count: 5, link: "/tags/cuisine" },
        { name: "Family", count: 4, link: "/tags/family" },
        { name: "Historical", count: 7, link: "/tags/historical" },
        { name: "Luxury", count: 3, link: "/tags/luxury" },
        { name: "Nature", count: 9, link: "/tags/nature" },
        { name: "Road Trip", count: 2, link: "/tags/road-trip" },
        { name: "Wildlife", count: 6, link: "/tags/wildlife" },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                 Tag Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
                {travelTags.map((tag, index) => (
                    <a
                        key={index}
                        href={tag.link}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-base"
                        aria-label={`${tag.name} (${tag.count} items)`}
                    >
                        {tag.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default TravelTagCloud;
