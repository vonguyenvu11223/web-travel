import ReadMore from "@/components/Form/ReadMore";
import { IconStar } from "@/components/icons";
import { ReviewProps } from "@/types";
import Image from 'next/image';




const ReviewItem = ({ review }: { review: ReviewProps }) => {
  return (
    <div className="mt-2 flex flex-col gap-3">
      <div className="flex flex-col gap-3 rounded-md bg-white p-4 ">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden border border-gray-300 bg-gray-100">
            <Image
              src={review.avatar}
              alt={review.author}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg sm:text-xl text-gray-800">
              {review.author}
            </span>
          </div>
        </div>
        <div className="font-semibold text-text1">{review?.title}</div>
        <div className="relative flex max-w-max items-center">
          {[1, 2, 3, 4, 5].map((i) => {
            return <IconStar key={i} className="h-4 w-4 fill-yellow-400" />;
          })}
          <div
            className={`absolute right-0 top-0 h-full overflow-hidden bg-white mix-blend-color`}
            style={{
              width: `${(100 - (Number(review.rating) * 100) / 5).toFixed(0)}%`,
            }}
          ></div>
        </div>

      
        <ReadMore>{review.description}</ReadMore>
       
      </div>
    </div>
  );
};

export default ReviewItem;
