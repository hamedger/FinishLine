import Image from "next/image";
import { BUSINESS, FLEET_LOGOS } from "@/lib/constants";

export function FleetLogoGrid({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <div>
      {showHeading && (
        <p className="text-sm font-bold text-[#16212B]">Fleet Programs We Accept</p>
      )}
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {FLEET_LOGOS.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} fleet program accepted at Finish Line`}
              width={420}
              height={200}
              className="h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-[#566270]">
        Fleet program not listed? Please call {BUSINESS.phone}.
      </p>
    </div>
  );
}
