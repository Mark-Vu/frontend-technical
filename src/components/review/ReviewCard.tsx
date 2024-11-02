import { ReviewType } from "../../types";
import Avatar from "../Avatar";
import Star from "./Star";

interface ReviewCardProps {
    review: ReviewType;
}

function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="p-5 border border-[#f5f5f5] rounded-xl bg-white shadow-2xl shadow-gray-600/10 text-black break-inside-avoid ">
            <div className="flex gap-4">
                <Avatar imageUrl="https://randomuser.me/api/portraits/women/12.jpg" />
                <div>
                    <h6 className="text-base font-medium text-gray-700">
                        {review.name}
                    </h6>
                    <p className="text-sm text-gray-500">
                        {review.reviewer_level}
                    </p>
                </div>
            </div>
            <div className=" mt-2 flex">
                {Array.from({ length: review.grade }, (_, i) => (
                    <Star key={i} />
                ))}
            </div>
            <p className="text-sm mt-3">{review.review}</p>
        </div>
    );
}

export default ReviewCard;
