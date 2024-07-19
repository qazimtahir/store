import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

const EVENTS_QUERY = `*[
  _type == "productName"]
  {
  _id,
  product,
  Price,
  Description,
  poster,
  category,
  }`;

export default async function Products() {
  const events = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });
  if (!events || events.length === 0) {
    return <p>No products found!</p>; // Handle no data case
  }
  return (
    <>
      <div className="text-center justify-center p-4">
        <h1 className="text-4xl font-bold ">Latest Products</h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 m-4">
        {events.map((event, i) => (
          <div
            key={event.i}
            className=" bg-neutral-300 border-2 rounded-xl p-2"
          >
            {event.poster && (
              <Image
                className="relative w-100 h-60"
                // layout="responsive"
                src={urlForImage(event.poster)}
                alt={event.product}
                width={400}
                height={400} // Adjust width and height as needed
              />
            )}
            <p className="text-xl font-semibold text-blue-800 items-center justify-center">
              {event.product}
            </p>
            <p className="text-sm text-black justify-start">
              {event.Description}
            </p>
            <p className="text-3xl text-blue-800">
              {event.Price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
