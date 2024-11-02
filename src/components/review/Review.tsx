import ReviewCard from "./ReviewCard";
import { ReviewType } from "../../types";
import reviewData from "../../reviews.json";

function Review() {
    const reviews: ReviewType[] = reviewData as ReviewType[];

    return (
        <div className="container max-w-screen-xl mx-auto px-10 py-4">
            <header className="text-3xl mb-10 max-w-screen-md px-4 mx-auto text-center space-y-4">
                <h3 className="text-primary text-sm font-semibold">Reviews</h3>
                <h2 className="font-semibold">
                    What our customers are saying 🍦🫶🏼
                </h2>
                <p className="text-[16px] leading-6">
                    At The Cone Zone, we’re proud to serve up smiles with every
                    scoop! Check out what our customers have to say about their
                    favorite flavors, experiences, and sweet moments.
                </p>
            </header>
            <div className="md:columns-2 xl:columns-3 gap-6 p-4 sm:p-1 mt-2 space-y-4">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
}

export default Review;
