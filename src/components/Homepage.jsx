import React, { useState } from "react";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles
import {
  Navigation,
  Circle,
  Square,
  ArrowRight,
  Earth,
  MapPin,
} from "lucide-react";
import fb from "../assets/fb.png";
import i from "../assets/instagram.png";
import l from "../assets/linkedin.png";
import x from "../assets/twitter.png";
import y from "../assets/youtube.png";

export default function () {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  return (
    <>
      <div className="">
        <Navbar />
        <div className="mx-24">
          {/* container */}
          <div className="p-[64px] flex justify-between">
            {/* goto&location&date&time */}
            <div className="flex flex-col  gap-4">
              {/* goto */}
              <div className="flex flex-nowrap ">
                <h1 className="text-black text-[40px]  md:text-[52px] font-[700] leading-[64px]">
                  Go anywhere with Uber
                </h1>
              </div>

              {/* location&date&time */}
              <div className="flex flex-col gap-4">
                <div className="relative flex flex-col gap-2">
                  <div className="flex border-2  border-white transition-all bg-[#F3F3F3] gap-2 rounded-md items-center p-3 focus-within:border-black focus-within:border-2">
                    <Circle
                      size={10}
                      className="fill-black"
                      strokeWidth={1.5}
                    />
                    <input
                      type="text"
                      placeholder="Pickup Location"
                      className=" outline-none w-full"
                    />
                    <Navigation className="fill-black" strokeWidth={1.5} />
                  </div>
                  <div className="bg-black absolute top-[54px] -left-[3.2px]  w-11 p-[0.6px] rotate-90"></div>
                  <div className="flex border-2 border-white transition-all items-center gap-2 bg-[#F3F3F3] rounded-md p-3  focus-within:border-black focus-within:border-2">
                    <Square
                      size={10}
                      className="fill-black"
                      strokeWidth={1.5}
                    />
                    <input
                      type="text"
                      placeholder="Dropoff Location"
                      className="font-normal outline-none   "
                    />
                  </div>
                </div>

                {/* date&time */}
                <div className="flex md:flex-row flex-col gap-1 justify-between ">
                  {/* Date Picker */}
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="w-full bg-[#F3F3F3] me-9  border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Time Picker */}
                  <DatePicker
                    selected={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="hh:mm aa"
                    className="w-full bg-[#F3F3F3] border me-9 border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* prices-button */}
                <div className="">
                  <button className="bg-black py-3 px-4 font-semibold text-white rounded-lg">
                    See prices
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mx-32 mt-0">
              <img
                src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/free-fire/0/0a/Bermuda.jpeg?width=960"
                className=""
              />
            </div>
          </div>

          <div className="p-[64px] flex-row">
            <p className="font-bold text-[36px] leading-[44px] mb-[36px]">
              Suggestions
            </p>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col p-[16px] bg-[#F3F3F3] rounded-md ">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[16px] leading-[20px] font-semibold text-black">
                      Ride
                    </p>
                    <p className="text-[12px] leading-[20px] my-[8px] pr-[8px] w-52 text-black">
                      Go anywhere with Uber. Request a ride, hop in, and go.
                    </p>
                    <button className="bg-white rounded-full justify-center py-[10px] px-[12px]">
                      Details
                    </button>
                  </div>

                  <div className="w-[128px] h-[128px]">
                    <img
                      src="https://cn-geo1.uber.com/static/mobile-content/launch-experience/ride.png"
                      className="w-[128px] h-[128px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-[16px] bg-[#F3F3F3] rounded-md">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[16px] leading-[20px] font-semibold text-black">
                      Reserve
                    </p>
                    <p className="text-[12px] leading-[20px] my-[8px] pr-[8px]  text-black">
                      Reserve your ride in advance so you can relax on the day
                      of your trip.
                    </p>
                    <button className="bg-white rounded-full justify-center py-[10px] px-[12px]">
                      Details
                    </button>
                  </div>

                  <div className="w-[128px] h-[128px]">
                    <img
                      src="https://cn-geo1.uber.com/static/mobile-content/uber_reserve/reserve_clock.png"
                      className="w-[128px] h-[128px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Log in to see your recent activity */}
          <div className="p-[64px]  ">
            <div className="grid grid-cols-2 gap-24">
              <div className="flex flex-col gap-9 justify-center ">
                <p className="text-[52px] leading-[64px] w-[450px] font-bold">
                  Log in to see your recent activity
                </p>
                <p className=" leading-[25px] w-[415px] ">
                  View past trips, tailored suggestions, support resources, and
                  more.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <button className="bg-black text-white py-[14px] px-[25px] rounded-md">
                      Log in To Your Account
                    </button>
                  </div>
                  <div className="flex relative group">
                    <p className="text-[16px] leading-[32px] border-b-2 border-gray-300">
                      Don’t have an Uber account? Sign up
                    </p>
                    <div className="absolute bottom-0 w-0 bg-black p-[0.8px] group-hover:w-[262px] transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              <div className="justify-center">
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1730197725/assets/0f/48c7ba-da13-4fdc-b54c-42878042f513/original/Airport-Fall.png" />
              </div>
            </div>
          </div>

          {/* Drive when you want, make what you need */}
          <div className="p-[64px]  ">
            <div className="grid grid-cols-2 gap-24">
              <div className="justify-center">
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png" />
              </div>
              <div className="flex flex-col gap-9 justify-center">
                <p className="text-[52px] leading-[64px] w-96 font-bold">
                  Drive when you want, make what you need
                </p>
                <p className=" leading-[25px] w-[415px] ">
                  Make money on your schedule with deliveries or rides—or both.
                  You can use your own car or choose a rental through Uber.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <button className="bg-black text-white py-[14px] px-[25px] rounded-md">
                      Get Started
                    </button>
                  </div>
                  <div className="flex relative group">
                    <p className="text-[16px] leading-[32px] border-b-2 border-gray-300">
                      Already have an account? Sign in
                    </p>
                    <div className="absolute bottom-0 w-0 bg-black p-[0.8px] group-hover:w-[262px] transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Uber you know, reimagined for business */}
          <div className="p-[64px]  ">
            <div className="grid grid-cols-2 gap-24">
              <div className="flex flex-col gap-9 justify-center">
                <p className="text-[52px] leading-[64px] w-[465px] font-bold">
                  The Uber you know, reimagined for business
                </p>
                <p className=" leading-[25px] w-[415px] ">
                  Uber for Business is a platform for managing global rides and
                  meals, and local deliveries, for companies of any size.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <button className="bg-black text-white py-[14px] px-[25px] rounded-md">
                      Log in To Your Account
                    </button>
                  </div>
                  <div className="flex relative group">
                    <p className="text-[16px] leading-[32px] border-b-2 border-gray-300">
                      Check out our solutions
                    </p>
                    <div className="absolute bottom-0 w-0 bg-black p-[0.8px] group-hover:w-[262px] transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              <div className="justify-center">
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png" />
              </div>
            </div>
          </div>

          {/* Make money by renting out your car */}
          <div className="p-[64px]  ">
            <div className="grid grid-cols-2 gap-36">
              <div className="justify-center">
                <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg"
                  className="h-[558px] w-[558px]"
                />
              </div>
              <div className="flex flex-col gap-9 justify-center">
                <p className="text-[52px] leading-[64px] w-96 font-bold">
                  Make money by renting out your car
                </p>
                <p className=" leading-[25px] w-[415px] ">
                  Connect with thousands of drivers and earn more per week with
                  Uber’s free fleet management tools.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <button className="bg-black text-white py-[14px] px-[25px] rounded-md">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR-Codes */}
      <div className="bg-[#f6f6f6]">
        <div className=" mx-24 ">
          <div className="p-[64px]">
            <div>
              <p className="text-[36px] leading-[44px] mb-8 font-bold">
                It’s easier in the apps
              </p>
            </div>
            <div className="grid grid-cols-2 gap-9">
              {/* first-box */}
              <div className="bg-white relative flex flex-row group">
                <div className="flex p-5">
                  <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_188,w_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png"
                    className="w-[150px] h-[150px]"
                  />
                </div>
                <div className="flex pr-[48px] pt-[24px] pb-[24px] pl-[24px]  items-center">
                  <div className="flex flex-col">
                    <div className="flex">
                      <p className="font-bold text-[24px] leading-[32px]">
                        Download the Uber app
                      </p>
                    </div>
                    <div className="flex">
                      <p className="font-normal text-[16px] leading-[24px]">
                        Scan to Download
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-[24px] group-hover:right-2 transition-all absolute top-[45%]">
                  <ArrowRight size={20} className="" strokeWidth={3} />
                </div>
              </div>
              {/* secend-box */}
              <div className="bg-white relative group flex flex-row">
                <div className="flex p-5">
                  <img
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_188,w_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png"
                    className="w-[150px] h-[150px]"
                  />
                </div>
                <div className="flex pr-[48px] pt-[24px] pb-[24px] pl-[24px]  items-center">
                  <div className="flex flex-col">
                    <div className="flex">
                      <p className="font-bold text-[24px] leading-[32px]">
                        Download the Driver app
                      </p>
                    </div>
                    <div className="flex">
                      <p className="font-normal text-[16px] leading-[24px]">
                        Scan to Download
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-[24px] group-hover:right-2 transition-all absolute top-[45%]">
                  <ArrowRight size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className=" bg-black">
        <div className="mx-24">
          <div className="p-[64px]">
            <div className="flex flex-col gap-10">
              <div className="flex">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                  className="w-[55px] h-[19px] filter invert brightness-0 leading-[112px]"
                />
              </div>
              <div className="flex ">
                <div className=" relative group cursor-pointer">
                  <p className="text-white pb-10">Visit Help Center</p>
                  <div className=" bottom-0 absolute p-0 group-hover:p-[0.8px]    transition-all duration-500 overflow-hidden group-hover:w-[118px]  w-0   bg-white " />
                </div>
              </div>
            </div>
            {/* links */}
            <div className="grid lg:grid-cols-4 gap-5  grid-cols-2">
              {/* Company */}
              <div>
                <p className="text-white font-bold text-[20px] pb-6">Company</p>
                <div className="flex flex-col gap-3">
                  <p className="text-white text-[15px]">About Us</p>
                  <p className="text-white text-[15px]">Our Offering</p>
                  <p className="text-white text-[15px]">Newsroom</p>
                  <p className="text-white text-[15px]">Investors</p>
                  <p className="text-white text-[15px]">Blog</p>
                  <p className="text-white text-[15px]">Careers</p>
                </div>
              </div>
              {/* Products */}
              <div>
                <p className="text-white font-bold text-[20px] pb-6">
                  Products
                </p>
                <div className="flex flex-col gap-3">
                  <p className="text-white text-[15px]">Ride</p>
                  <p className="text-white text-[15px]">Drive</p>
                  <p className="text-white text-[15px]">Deliver</p>
                  <p className="text-white text-[15px]">Eat</p>
                  <p className="text-white text-[15px]">Uber for Business</p>
                  <p className="text-white text-[15px]">Uber Freight</p>
                  <p className="text-white text-[15px]">Gift cards</p>
                </div>
              </div>
              {/* Global citizenship */}
              <div>
                <p className="text-white font-bold text-[20px] pb-6">
                  Global citizenship
                </p>
                <div className="flex flex-col gap-3">
                  <p className="text-white text-[15px]">Safety</p>
                  <p className="text-white text-[15px]">
                    Diversity and Inclusion
                  </p>
                  <p className="text-white text-[15px]">Sustainability</p>
                </div>
              </div>
              {/* Travel */}
              <div>
                <p className="text-white font-bold text-[20px] pb-6">Travel</p>
                <div className="flex flex-col gap-3">
                  <p className="text-white text-[15px]">Reserve</p>
                  <p className="text-white text-[15px]">Airports</p>
                  <p className="text-white text-[15px]">Cities</p>
                </div>
              </div>
            </div>

            {/* socialmedia */}
            <div className="flex lg:flex-row flex-col gap-6   mt-16">
              <div className="flex flex-1 gap-28">
                <img
                  src={fb}
                  className="filter invert brightness-0 h-[16px] w-[16px]"
                />
                <img
                  src={x}
                  className="filter invert brightness-0 h-[16px] w-[16px]"
                />
                <img
                  src={y}
                  className="filter invert brightness-0 h-[16px] w-[16px]"
                />
                <img
                  src={l}
                  className="filter invert brightness-0 h-[16px] w-[16px]"
                />
                <img
                  src={i}
                  className="filter invert brightness-0 h-[16px] w-[16px]"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 ">
                  <Earth className="filter invert brightness-0" />
                  <p className="text-white  ">English</p>
                </div>
                <div className="flex gap-2 ">
                  <MapPin className="filter invert brightness-0" />
                  <p className="text-white  ">Surat</p>
                </div>
              </div>
            </div>

            {/* playstore & appstore */}
            <div className="flex gap-3 mt-18">
              <div>
                <img
                  className="h-[38px] w-[128px]"
                  src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                />
              </div>
              <div>
                <img
                  className="h-[40px] w-[128px]"
                  src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                />
              </div>
            </div>

            <div className="flex lg:flex-row flex-col mt-12">
              <div className="flex-1">
                <p className="text-gray-300 text-[12px] ">
                  © 2025 Uber Technologies Inc.
                </p>
              </div>
              <div className="flex gap-12">
                <p className="text-gray-300 text-[12px] ">Privacy</p>
                <p className="text-gray-300 text-[12px] ">Accessibility</p>
                <p className="text-gray-300 text-[12px] ">Terms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
