
import { Button } from "../Header/Header";

function HomeMain() {

  return (
    <>
      <div className="mt-25 ml-10 md:ml-30 text-[#f4f6ef]">
        <h1 className="text-5xl md:text-8xl font-semibold ">Your next</h1>
        <h1 className="text-5xl md:text-8xl font-semibold">adventure awaits</h1>
      </div >

      <div className="flex justify-center px-5">
        <div className="max-w-75">
          <p className="text-[#f4f6ef] mt-7 text-base md:text-lg">
            From budgeting to booking, we handle the details so you can enjoy
            the journey. Your next adventure starts here.
          </p>
        </div>
      </div>

      <div className="ml-10 shadow[0px_0px_2px_red] md:ml-240 mt-5 flex gap-2">
        <Button btn="Explore" />

        <Button
          btn="Learn More"
          className="bg-[#13294b] hover:bg-gray-700"
        />
      </div>
    </>
  );
}

export default HomeMain;
