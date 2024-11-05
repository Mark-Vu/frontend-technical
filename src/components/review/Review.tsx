import React, { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { ReviewType } from "../../types";
import reviewData from "../../reviews.json";

function Review() {
    const reviews: ReviewType[] = reviewData as ReviewType[];
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOverflow, setIsOverflow] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            const containerHeight = containerRef.current.offsetHeight;
            const screenHeight = window.innerHeight;

            if (containerHeight > screenHeight) {
                setIsOverflow(true);
            }
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className={`container max-w-screen-xl mx-auto py-4 px-6 md:p-10 xl:px-20 space-y-10 ${!showAll && isOverflow ? "max-h-screen overflow-hidden" : ""}`}
        >
            <header className=" max-w-screen-md mx-auto md:px-4 md:text-center space-y-4">
                <header className="text-3xl space-y-2">
                    <h3 className="text-primary text-sm font-semibold">
                        Reviews
                    </h3>
                    <h2 className="font-semibold">
                        What our customers are saying 🍦🫶🏼
                    </h2>
                </header>
                <p className="text-base leading-6">
                    At The Cone Zone, we’re proud to serve up smiles with every
                    scoop! Check out what our customers have to say about their
                    favorite flavors, experiences, and sweet moments.
                </p>
            </header>

            <div className="md:columns-2 xl:columns-3 space-y-4 gap-4">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>

            {isOverflow && !showAll && (
                <div className="z-2 absolute left-0 right-0 bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent flex items-center justify-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-primary hover:bg-primary-hover text-white py-3 px-5 rounded-xl"
                    >
                        Show all reviews
                    </button>
                </div>
            )}
        </div>
    );
}

export default Review;
