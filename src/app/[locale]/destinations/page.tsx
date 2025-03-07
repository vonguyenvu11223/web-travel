import ImageCustom from "@/components/image-custom";
import destinationData from "@/data/destinationData";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Destination() {
  const items = destinationData.data;

  return (
    <div className="container">
      <div className="flex flex-col items-start gap-5 lg:flex-row">
        <div className="w-full">
          <div className="container py-10">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-text1">
                {"Explore Asia City"}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item: any) => (
                <Link href="#" aria-label={item?.title}>
                  <div className="relative cursor-pointer text-center">
                    <div className="group relative min-h-[300px] w-full overflow-hidden rounded-md">
                      {item?.image ? (
                        <ImageCustom
                          src={`${item.image.src}`}
                          image_alt={""}
                          className="transform rounded-md transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="h-[200px] w-full bg-slate-400"></div>
                      )}
                    </div>
                    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 translate-y-[-50%]">
                      <span className="text-2xl font-bold text-white shadow-black drop-shadow">
                        {item?.title}
                      </span>
                      <div className="mt-1 text-sm text-white shadow-black drop-shadow">
                        {item.count} tours
                      </div>
                    </div>
                    <div className="z-[5] rounded-md"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
