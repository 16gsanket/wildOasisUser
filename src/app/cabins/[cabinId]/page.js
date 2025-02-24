import Cabin from "@/app/_components/Cabin";
import Reservations from "@/app/_components/Reservations";
import Spinner from "@/app/_components/Spinner";
import {
  getCabin,
  getCabins
} from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const paramGot = await params;

  const { name } = await getCabin(paramGot?.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

/**
 * This function is used to generate static params for the /cabins/[cabinId] route.
 * It fetches all the cabins and returns an array of objects with a single property
 * "cabinId" which is the id of the cabin as a string.
 * This array is then used to generate static pages for all the cabins.
 */
export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

/**
 * Renders the cabin details page for a specific cabin.
 *
 * This asynchronous function fetches the cabin data, including settings and booked dates,
 * based on the cabinId provided in the params. It then displays the cabin's image, name,
 * description, maximum capacity, location, and privacy details. It also includes a
 * reservation section for booking the cabin.
 *
 * @param {Object} params - The parameters containing the cabinId.
 *
 * @returns {JSX.Element} - A JSX element representing the cabin details page.
 */

export default async function Page({ params }) {


  const cabin = await getCabin(params.cabinId);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  // const[ setings, bookedDates] = await Promise.all([getCabins(params.cabinId, getSettings(), getBookedDatesByCabinId(params.cabinId))])

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      
      <Cabin cabin={cabin} />
      <div className="">
        <h2 className="text-5xl font-semibold text-center pb-10 text-accent-500">
          Reserve {name} today. Pay on arrival.
        </h2>
      </div>
      <Suspense fallback={<Spinner />}>
        <Reservations cabin={cabin} />
       
      </Suspense>
    </div>
  );
}
