import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// this revalidate export enbles us to use the ISG so the page so when the user hits this route page is generated with fresh data is the validation time for that page is collapsed
// this should be a direct value in seconds

export const metadata = {
  title: "Cabins",
};

async function Page({ searchParams }) {
  const searchParamsResilved = await searchParams;
  

  const filter = searchParamsResilved?.filter ?? "all";
  

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-20 ">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        {/* here the fallback works becuase we created a compoent cabinList out of the loop which distinclty defined the boundary for the eract tree fiber to add the suspense before the tree compoennt ~~!!  */}
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

export default Page;
