"use client";
import useBookingStore from "@/store/bookAppointment";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { isBooked, bookAppointment } = useBookingStore();
  return (
    <header className="w-full h-max bg-white shadow-md py-2 fixed top-0 z-10">
      <nav className="max-w-5xl flex items-center justify-between mx-auto">
        {!isBooked && (
          <>
            <div className="bg-red-400 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer">
              MD
            </div>
            <Link href={"/"} className="text-blue-500 text-sm font-medium">
              Help?
            </Link>
          </>
        )}
        {isBooked && (
          <button className="flex items-center gap-2" onClick={bookAppointment}>
            <Image src="/assets/right.svg" alt="right" width={35} height={35} />
            <p className="text-[14px] font-semibold">
              {" "}
              In-Clinic Consultation{" "}
            </p>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
