import ReadMore from "@/components/Form/ReadMore";
import { IconStar } from "@/components/icons";
import dynamic from "next/dynamic";
import Image from "next/image";




export default function ReviewItem({ data }: {data: any}) {
  // console.log('Data', data);

  return (
    <div className="mt-10 flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="relative flex items-center">
          {[1, 2, 3, 4, 5].map((i) => {
            return <IconStar key={i} className="h-4 w-4 fill-yellow-400" />;
          })}
          <div
            className={`absolute right-0 top-0 h-full overflow-hidden bg-white mix-blend-color`}
            style={{
              width: `${(100 - (Number(data.rating) * 100) / 5).toFixed(0)}%`,
            }}
          ></div>
        </div>
        <span className="font-semibold text-text1">{data?.title}</span>
      </div>
      <div className="flex items-center gap-4">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden border border-gray-300 bg-gray-100">
                <Image
            src={data.avatar}
            alt={data.author}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-lg sm:text-xl text-gray-800">
            {data.author}
                </span>
              </div>
            </div>
      
      
      <ReadMore> {data.description}</ReadMore>
      
    </div>
  );
}
