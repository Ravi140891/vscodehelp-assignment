"use client";
import Image from "next/image";
import Appointment from "./components/Appointment";
import FAQ from "./components/FAQ";
import useBookingStore from "@/store/bookAppointment";
import Booking from "./components/Booking";

export default function Home() {
  const { isBooked } = useBookingStore();
  return (
    <>
      <section className="max-w-4xl mx-auto bg-white h-max pb-12 pt-[60px]">
        <div className="w-full h-max pt-9 px-9 pb-4 flex items-center gap-10">
          <Image
            src="/assets/doctor_female.svg"
            alt="doctor"
            width={75}
            height={75}
          />
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-[14px] font-semibold">Dr. Manik Dalvi</h3>
              <p className="text-[12px] font-normal">
                Obstetrics &amp; Gynecology
              </p>
            </div>
            <button className="border border-[#0176c4] text-[12px] font-semibold text-[#0176c4] w-max py-1 px-2 rounded-[5px]">
              VIEW PROFILE
            </button>
          </div>
        </div>
        {!isBooked && <Appointment />}
        {isBooked && <Booking />}
      </section>
      <FAQ />
    </>
  );
}
