import {
  IconChevronRight,
  IconEnvelope,
  IconMessageSmile,
  IconPhoneVolume,
} from "@/components/icons";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Kapanda Support center",
  description:
    "Kapanda supports the transportation services and tours in Vietnam. 24/7 support team is always ready to help you.",
};

export default async function SupportPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    
      <div>
                  <PageHeader
                      title="Contact Us"
                      sub_title="We’re here to help and answer any questions you might have."
                      img="https://res.cloudinary.com/drnf8u8vq/image/upload/v1738730453/nextravel/uganda_ylddjc.webp"
                  />
                  <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12">
          <div className="flex-1 w-full md:w-1/3">
            <div className="w-full h-full px-3 py-8 text-center bg-gray-100 rounded-md">
              <IconMessageSmile className="w-6 h-6 mx-auto mb-3 fill-secondary" />
              <h3 className="mb-2 text-lg font-semibold"> Chat support</h3>
              <div className="mb-5 text-text1">
                Our support team is just a click away.
              </div>

               <div
                      className="flex cursor-pointer items-center justify-center gap-2 text-secondary"
                     
                    >
                      <span>Click to open chat </span>
                      <IconChevronRight className="h-4 w-4 fill-secondary" />
                    </div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-1/3">
            <div className="w-full h-full px-3 py-8 text-center bg-gray-100 rounded-md">
              <IconEnvelope className="w-6 h-6 mx-auto mb-3 fill-secondary" />
              <h3 className="mb-2 text-lg font-semibold">Email support</h3>
              <div className="mb-5 text-text1">
                {`Send us an email and we'll get back to you soon.`}
              </div>
              <div className="flex items-center justify-center gap-2 text-secondary">
                <span>contact@joombooking.com</span>
                <IconChevronRight className="w-4 h-4 fill-secondary" />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-1/3">
            <div className="w-full h-full px-3 py-8 text-center bg-gray-100 rounded-md">
              <IconPhoneVolume className="w-6 h-6 mx-auto mb-3 fill-secondary" />
              <h3 className="mb-2 text-lg font-semibold">Call us</h3>
              <div className="mb-5 text-text1">
                English only and in case of emergency
              </div>
              <div
                className="flex items-center justify-center gap-2 text-secondary"
              >
                <span>
                  Whatsapp :{" "}
                  <a
                    title="Contact us by Whatsapp"
                    href="https://api.whatsapp.com/send?phone=+84912348149"
                    target="_blank"
                  >
                    +84 912348149
                  </a>
                </span>
                <IconChevronRight className="w-4 h-4 fill-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
