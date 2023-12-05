/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { format, addDays, isToday, isTomorrow, isValid } from "date-fns";
import { times } from "@/utils/time";
import useBookingStore from "@/store/bookAppointment";

const Appointment = () => {
  const [active, setActive] = useState("clinic");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayedDates, setDisplayedDates] = useState<
    { label: string; date: Date }[]
  >([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [dateOffset, setDateOffset] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const { bookAppointment, setBookingDetails } = useBookingStore();
  const handleNextDates = () => {
    setDateOffset((prevOffset) => prevOffset + 3);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setBookingDetails(selectedDate, selectedTime);
      bookAppointment();
    }
  };

  const handlePreviousDates = () => {
    setDateOffset((prevOffset) => Math.max(0, prevOffset - 3));
  };

  useEffect(() => {
    updateDisplayedDates();
  }, [dateOffset]);

  const updateDisplayedDates = () => {
    const startDate = addDays(new Date(), dateOffset);
    const dates = Array.from({ length: 3 }, (_, i) => {
      const date = addDays(startDate, i);
      let label;
      if (isToday(date)) {
        label = "Today";
      } else if (isTomorrow(date)) {
        label = "Tomorrow";
      } else {
        label = format(date, "EEE, dd MMM");
      }
      return { label, date };
    });

    setDisplayedDates(dates);
  };

  const handleDateChange = (index: number) => {
    if (displayedDates[index] && displayedDates[index].date) {
      setSelectedDate(new Date(displayedDates[index].date));
      setSelectedDateIndex(index);
    }
  };

  return (
    <div>
      <div className="w-full h-max border-y p-4 pb-0">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-[16px] text-[#212529] font-semibold">
              Book Appointment
            </h3>
            <p className="text-[14px] text-[#948e8e] font-normal capitalize">
              Select your consultation type
            </p>
            <p className="text-[12px] text-[#64bc6e] font-semibold py-1">
              Fees approx ₹ 500
            </p>
            <p className="text-[12px] font-semibold text-[#715ac4]">
              {" "}
              (pay at clinic)
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className={` w-[85px] h-[85px] relative`}
              onClick={() => setActive("clinic")}
            >
              <Image
                src={
                  active === "clinic"
                    ? "/assets/active-clinic.png"
                    : "/assets/clinic.png"
                }
                alt="clinic"
                width={85}
                height={85}
              />
              <p
                className={`${
                  active === "clinic" ? "text-white" : "text-black"
                } text-[14px] absolute z-20 bottom-1 left-3`}
              >
                In-Clinic
              </p>
            </button>
            <button
              className={` w-[85px] h-[85px] relative`}
              onClick={() => setActive("audio")}
            >
              <Image
                src={
                  active === "audio"
                    ? "/assets/active-audio.png"
                    : "/assets/audio.png"
                }
                alt="audio"
                width={85}
                height={85}
              />
              <p
                className={`${
                  active === "audio" ? "text-white" : "text-black"
                } text-[14px] absolute z-20 bottom-1 left-5`}
              >
                Audio
              </p>
            </button>
            <button
              className={` w-[85px] h-[85px] relative`}
              onClick={() => setActive("video")}
            >
              <Image
                src={
                  active === "video"
                    ? "/assets/active-video.png"
                    : "/assets/video.png"
                }
                alt="video"
                width={85}
                height={85}
              />
              <p
                className={`${
                  active === "video" ? "text-white" : "text-black"
                } text-[14px] absolute z-20 bottom-1 left-5`}
              >
                Video
              </p>
            </button>
          </div>
        </div>
        {active === "clinic" && (
          <div>
            <h3 className="text-[16px] font-semibold">Clinic Name</h3>
            <div className="p-6 flex items-center gap-2">
              <div className="w-[20px] h-[20px] rounded-full bg-[#64bc6e] flex items-center justify-center">
                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
              </div>
              <p className="text-[14px]">
                Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp.
                Bopal Nagar, Maharashtra, 421302{" "}
              </p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-4 relative">
          <button
            className="py-1 text-[28px] absolute left-0"
            onClick={handlePreviousDates}
            disabled={dateOffset === 0}
          >
            {"<"}
          </button>
          <div className="mx-4 flex items-center justify-around w-full">
            {displayedDates.map((dateObj, index) => (
              <div
                key={index}
                className={`text-center ${
                  selectedDateIndex === index ? "selected-date" : ""
                }`}
              >
                <button
                  className="text-[14px] font-medium"
                  onClick={() => handleDateChange(index)}
                >
                  {dateObj.label}
                </button>
                <p className="text-[12px] text-[#64bc6e]">8 slots available</p>
                {selectedDateIndex === index && (
                  <div className="w-[90%] h-[3px] bg-[#64bc6e] mt-2 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
          <button
            className="py-1 text-[28px] absolute right-0"
            onClick={handleNextDates}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="w-full h-max p-4 flex items-center gap-3 flex-wrap">
        {times.map((time) => (
          <button
            className={`${
              selectedTime === time.time ? "bg-[#64bc6e] text-white" : ""
            } w-[30%] h-[36px] border flex items-center justify-center text-[12px] rounded-[5px]`}
            key={time.id}
            onClick={() => setSelectedTime(time.time)}
          >
            {time.time}
          </button>
        ))}
      </div>
      <div className="relative w-full pb-10">
        <button
          className={`${
            selectedDate && selectedTime
              ? "bg-[#0176c4]"
              : "bg-[#ccc] cursor-not-allowed"
          } absolute right-3 border py-2 px-4 text-xs bg-[#0176c4] text-white rounded-[5px]`}
          disabled={!selectedDate && !selectedTime}
          onClick={handleContinue}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Appointment;
