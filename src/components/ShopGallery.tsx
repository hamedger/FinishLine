import Image from "next/image";

const GALLERY_PHOTOS = [
  {
    src: "/shop/shop-storefront-wide.jpg",
    alt: "Finish Line Oil Change and Repair storefront exterior in Livonia, MI",
  },
  {
    src: "/shop/shop-mechanic-underhood.jpg",
    alt: "Finish Line technician working under the hood of a vehicle",
  },
  {
    src: "/shop/shop-bay-interior.jpg",
    alt: "Inside a Finish Line service bay with a vehicle up on the lift",
  },
  {
    src: "/shop/shop-tire-stacks.jpg",
    alt: "Tires stacked and ready for service at Finish Line in Livonia, MI",
  },
] as const;

export function ShopGallery() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Take a Look Inside
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Our Shop on Middlebelt Road
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Watch a quick video tour and see real photos from our Livonia
            location — come see us in person.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xs overflow-hidden rounded-2xl shadow-md">
          <video
            src="/shop/shop-tour.mp4"
            poster="/shop/shop-hero-bay-wide.jpg"
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-full bg-black object-cover"
          >
            Your browser does not support embedded video.
          </video>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-300 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
