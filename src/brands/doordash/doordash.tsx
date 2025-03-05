import Navbar from "./components/Nav"
import HeroIMg from "./assets/hero-img.jpg"
import DoorDashImg from "./assets/doordash-0.jpg"

import { MapPin } from "lucide-react"

const DoorDash = () => {
  return (
    <div>
        <Navbar/>
        <div className="bg-red-500 h-[65svh]  md:h-[87svh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10 px-20 pt-5 pb-24 h-full relative">
            <div className="flex flex-col text-left md:pt-16">
              <h1 className="text-4xl text-white font-bold">Earn with the best</h1>
              <p className="text-white font-semibold ">Deliver with DoorDash and get more opportunities to earn.</p>
            </div>

            <div className="md:absolute top-[55%] left-[25%] md:z-10 md:max-w-[500px]">
              <form 
                action=""
                className="bg-white p-10 md:pb-16 rounded-md"
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
                  By clicking "Next," I agree to the <span className="text-red-500 underline">
                    Independent Contractor Agreement  </span> 
                   and have read the <span className="text-red-500 underline">
                   Dasher Privacy Policy. </span> Learn more about how <span className="text-red-500 underline">
                    Dasher Pay 
                  </span> works.
                </p>

                <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:justify-between">
                  <div className="flex justify-center md:order-2 bg-red-500 py-2 px-3 rounded-full font-semibold text-white">Next</div>
                  <div className="flex justify-center md:order-1 bg-[#d6d6d6ff] py-2 px-3 rounded-full font-semibold">Already started signing up</div>
                </div>
              </form>
            </div>

            <div className="relative hidden md:block h-full" >
              <img 
                src={HeroIMg} 
                alt="hero" 
                className="object-cover w-full h-full"
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

        <div className="bg-[#f1f1f1ff] py-5 md:py-24">
          <section className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            <div className="text-center p-20 max-w-[500px]">
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false"
                  className="text-[#d1311F]"
                >
                  <title>People Group Fill</title><path d="M15.4977 20H3.5C2.67157 20 2 19.3284 2 18.5C2 14.6509 6.2403 13 9.5 13C12.7547 13 16.9922 14.6481 17 18.4978C17 19.3274 16.3274 20 15.4977 20Z" fill="currentColor"></path>
                  <path d="M21 19C21.8284 19 22.5 18.3284 22.5 17.5C22.483 17.2175 22.4539 16.9433 22.3849 16.6674C22.2772 16.2368 22.0635 15.668 21.6375 15.1C20.7336 13.8948 19.116 13 16.5 13C16.1159 13 15.7533 13.0193 15.4114 13.056C17.1947 14.2538 18.4954 16.3108 18.5 18.4956C18.5 18.4956 18.5 18.7148 18.4585 19H21Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4999 12C18.7091 12 20.4999 10.2091 20.4999 8C20.4999 5.79086 18.7091 4 16.4999 4C15.8385 4 15.2145 4.16055 14.6649 4.44481C15.1954 5.33969 15.4999 6.38428 15.4999 7.5C15.4999 8.92235 15.005 10.2291 14.178 11.2575C14.8326 11.7249 15.6342 12 16.4999 12Z" fill= "currentColor">
                  </path>
                </svg>
              </div>
              <h2 className="font-semibold">Work when you want</h2>
              <p>You decide when, where, and how much you work. Work on your schedule and forget about reporting to an office — or a boss.</p>
            </div>

            <div className="text-center max-w-[500px]">
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false"
                  className="text-[#d1311F]"
                >
                 <title>Order Hotbag Fill</title><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5L18 5.00001C19.1046 5.00001 20 5.89544 20 7.00001L20 16.8638C20.0001 17.2607 20.0001 17.6496 19.9836 18H4.01644C3.99991 17.6496 3.99996 17.2608 4.00001 16.8638L4.00001 7.00001C4.00001 5.89544 4.89544 5.00001 6.00001 5.00001H8V4.5C8 3.11929 9.11929 2 10.5 2H13.5C14.8807 2 16 3.11929 16 4.5V5ZM13.5 4C13.7761 4 14 4.22386 14 4.5V5H10V4.5C10 4.22386 10.2239 4 10.5 4H13.5ZM14.265 9.2C15.1868 9.2 16.0392 9.70548 16.4753 10.5281C17.5953 12.6591 16.0788 14.8 14.0767 14.8H12.5306C12.3323 14.8 12.1539 14.7306 12.0152 14.5919L10.4888 13.0556C10.4492 13.006 10.4194 12.9465 10.4194 12.8871C10.4194 12.7483 10.5285 12.6393 10.6573 12.6393H14.0569C14.4137 12.6393 14.6912 12.3519 14.6912 11.995C14.6912 11.6382 14.4038 11.3607 14.047 11.3607H9.10121C8.9129 11.3706 8.73449 11.2913 8.59573 11.1526L7.06938 9.61628C7.02973 9.56672 7 9.50725 7 9.44778C7 9.30902 7.10903 9.2 7.23787 9.2H14.265Z" fill="currentColor"></path>
                  <path d="M4.5359 20H19.4641C19.0782 20.6684 18.5063 21.2123 17.816 21.564C17.2731 21.8406 16.7337 21.9288 16.2765 21.9661C15.8602 22.0001 15.3686 22.0001 14.8639 22H9.13622C8.63145 22.0001 8.13987 22.0001 7.72355 21.9661C7.26636 21.9288 6.7269 21.8406 6.18405 21.564C5.49373 21.2123 4.92179 20.6684 4.5359 20Z" fill="currentColor"></path>
                </svg>
              </div>

              <h2 className="font-semibold">Work when you want</h2>
              <p>Choose whether or not to accept offers, find demand near you, and earn more instantly with promotions like Challenges and Peak Pay in the Dasher app.</p>
            </div>

            <div className="text-center p-20 max-w-[500px]">
              <div className="flex justify-center mb-4">
                <svg 
                  width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false"
                  className="text-[#d1311F]"
                >
                  <title>Time Fill</title>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 6.5C13 5.94772 12.5523 5.5 12 5.5C11.4477 5.5 11 5.94772 11 6.5V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.7929 16.2071C15.1834 16.5976 15.8166 16.5976 16.2071 16.2071C16.5976 15.8166 16.5976 15.1834 16.2071 14.7929L13 11.5858V6.5Z" fill="currentColor">
                </path>
                </svg>
              </div>
              <h2 className="font-semibold">Work when you want</h2>
              <p>Sign up in minutes and start earning within days. Once your application is approved, you can start dashing right away and cash out instantly*.</p>
            </div>
          </section>

          <div className="flex justify-center w-full px-3 md:p-0">
            *subject to availability and eligibility, approval and activation of the DoorDash Crimson Visa® Debit Card to get paid instantly.
          </div>

          <section className="pt-16 w-full">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-y-[24px] md:gap-x-[24px] w-full"
            >

              <div className="flex w-full md:clip-container pl-2">
                <img 
                  src={DoorDashImg}
                  alt="" 
                  width="1208" 
                  height="1080"
                  className="object-cover w-full h-full md:rounded-r-xl"
                />
              </div>

              <div className="flex flex-col items-center md:justify-center bg-gradient-to-r from-[#fff7f5ff] to-[#ffe0dbff]">
                <h2
                  className="font-bold text-xl"
                >
                  Dash with confidence
                </h2>
                <div className="flex items-center">
                  <p className="pt-2">
                    Peace of mind while dashing is essential. 
                    That includes knowing that you can easily get help when you need it. 
                    And while we hope every delivery goes smoothly, we’ve got your back if things don’t go as planned. That’s why we built our safety toolkit — to make getting on the road even safer for Dashers.
                  </p>
                </div>

                <div className="pt-10">
                  <a href="#" className="bg-red-500 py-3 px-3 rounded-full text-white text-lg font-semibold">Learn More</a>
                </div>
              </div>
              
            </div>
          </section>
        </div>
    </div>
  )
}

export default DoorDash;