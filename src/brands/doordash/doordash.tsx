import Navbar from "./components/Nav"
import HeroIMg from "./assets/hero-img.jpg"
import { MapPin } from "lucide-react"

const DoorDash = () => {
  return (
    <div>
        <Navbar/>
        <div className="bg-red-500 h-svh">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 pt-5 pb-24 h-full relative">
            <div className="flex flex-col text-left">
              <h1 className="text-4xl text-white font-bold">Earn with the best</h1>
              <p className="text-white font-semibold text-lg">Deliver with DoorDash and get more opportunities to earn.</p>
            </div>

            <div className="md:absolute top-[50%] left-[25%] md:z-10 md:max-w-[500px]">
              <form 
                action=""
                className="bg-white p-10 rounded-md"
              >
                <h2 className="text-black font-semibold text-lg">Sign up to become a Dasher</h2>
                <div className="relative">
                  <label htmlFor="postal-code" className="sr-only">postal-code</label>
                  <input 
                    type="postal-code" 
                    name="postal-code" 
                    id="postal-code" 
                    placeholder="Your Postal Code"
                    className="w-full p-2 pl-7 border border-transparent font-semibold bg-[#d6d6d6ff] text-[#606060ff] rounded-md"
                  />
                  <MapPin className="absolute top-1/2  -translate-y-1/2 left-1 text-[#606060ff]" size={15}/>
                </div>
                <p>
                  By clicking "Next," I agree to the  
                   <span className="text-red-500 underline">
                    Independent Contractor Agreement
                   </span> 
                   and have read the 
                  <span className="text-red-500 underline">
                    Dasher Privacy Policy.
                  </span> Learn more about how 
                  <span className="text-red-500 underline">
                    Dasher Pay 
                  </span>works.
                </p>

                <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:justify-between mt-5">
                  <div className="flex justify-center bg-red-500 py-2 px-2 rounded-xl font-semibold text-white">Next</div>
                  <div className="flex justify-center bg-[#d6d6d6ff] py-2 px-2 rounded-xl font-semibold">Already started signing up</div>
                </div>
              </form>
            </div>

            <div className="relative hidden md:block">
              <img 
                src={HeroIMg} 
                alt="hero" 
                className="object-contain w-full h-full  mb-10"
                width={1208}
                height={1080}
              />

              <div 
                className="
                bg-white text-gray-500 flex items-center 
                h-[40px] px-3 pt-2 absolute bottom-3 right-2
                "
              >
                <MapPin size={24}/>
                <h2 className="font-semibold">Alfonso from Davidson, NC</h2>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default DoorDash