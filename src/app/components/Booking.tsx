"use client";
import Image from "next/image";
import useBookingStore from "@/store/bookAppointment";
import { format } from "date-fns";
import { useState } from "react";

const Booking = () => {
  const { selectedDate, selectedTime, bookAppointment } = useBookingStore();
  const [mobile, setMobile] = useState("");
  return (
    <div className="border-t p-4 w-[80%] h-max ml-8">
      <h3 className="text-[16px] text-[#212529] font-semibold">
        Appointment Summary
      </h3>
      <div className="my-6 w-full h-max flex items-center justify-between">
        <div className="flex items-start gap-4">
          <Image src="/assets/01.svg" alt="clinic" width={38} height={38} />
          <div className="flex flex-col gap-1">
            <h3 className="text-[14px] font-semibold">
              In-Clinic Consultation
            </h3>
            <div>
              <p className="text-[10px] text-[#64bc6e] font-semibold py-1">
                Fees approx ₹ 500
              </p>
              <p className="text-[10px] font-semibold text-[#715ac4]">
                {" "}
                (pay at clinic)
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-7">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/clock.svg"
                alt="clock"
                width={16}
                height={21}
              />
              <p className="text-[14px]">
                {selectedTime ? selectedTime : "Time not selected"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/calender.svg"
                alt="calender"
                width={16}
                height={16}
              />
              <p className="text-[14px]">
                {selectedDate
                  ? format(selectedDate, "dd-MM-yyyy")
                  : "Date not selected"}
              </p>
            </div>
          </div>
          <button
            className="text-[12px] text-[#0176c4] font-semibold underline"
            onClick={bookAppointment}
          >
            Change Date & Time
          </button>
        </div>
      </div>
      <div className="w-full h-max p-6 border border-[#9d9d9d] rounded-[10px]">
        <h3 className="text-[16px] font-semibold">
          Enter phone number to continue
        </h3>
        <p className="text-[12px]">
          Please enter your WhatsApp number to receive timely updates.
        </p>
        <div className="my-4 w-full">
          <div className="flex items-center w-[50%]">
            <input
              type="text"
              placeholder="Mobile Number*"
              className="border-b w-[255px] p-2"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <Image
              src="/assets/WhatsApp.png"
              alt="whatsapp"
              width={26}
              height={27}
            />
          </div>
          <p className="text-[10px] text-[#948e8e]">
            Please enter the mobile number of the patient. You will receive a
            confirmation message on this number.{" "}
          </p>
          <div className="w-full relative mt-16 pb-6">
            <button
              className={`${
                mobile ? "bg-[#0176c4]" : "bg-[#ccc] cursor-not-allowed"
              } absolute right-3 border py-2 px-8 text-xs bg-[#0176c4] text-white rounded-[5px]`}
              disabled={!mobile}
            >
              Send otp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
