"use client";
import Accordian from "./Accordian";
import { useState } from "react";

const FAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const handleAccordionToggle = (index: number) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto bg-[#ddf198] h-max p-12">
      <h3 className="text-2xl font-medium text-center">
        Frequently asked questions
      </h3>
      <div className="w-[85%] h-max my-10 mx-auto">
        <Accordian
          question=" What are the payment options available? "
          answer=" E.g, You can pay using a variety of methods such as Internet Banking, Debit/Credit card, Wallet, UPI, and so on. "
          isOpen={openAccordionIndex === 0}
          onToggle={() => handleAccordionToggle(0)}
        />
        <Accordian
          question=" Do we serve all over India? "
          answer=" We are currently based in Bhiwandi, however, we offer services nationwide via online consultations. "
          isOpen={openAccordionIndex === 1}
          onToggle={() => handleAccordionToggle(1)}
        />
        <Accordian
          question="  What are the walk-in options available?  "
          answer="  We offer services at our clinics located at Bhiwandi  "
          isOpen={openAccordionIndex === 2}
          onToggle={() => handleAccordionToggle(2)}
        />
        <Accordian
          question="  Are online consultations available?  "
          answer="   Yes, we offer teleconsultation and onlineservices. Book an appointment at link provided.  "
          isOpen={openAccordionIndex === 3}
          onToggle={() => handleAccordionToggle(3)}
        />
        <Accordian
          question=" How long will my appointment take?  "
          answer="  The length of your appointment is determined by the condition or injuries being treated, as well as whether or not x-rays or an MRI are required. Please allow at least one hour for doctors to provide personalized attention and high-quality care.  "
          isOpen={openAccordionIndex === 4}
          onToggle={() => handleAccordionToggle(4)}
        />
        <Accordian
          question=" Is any referral required for appointments? "
          answer=" No, we do not require a referral for the appointments.  "
          isOpen={openAccordionIndex === 5}
          onToggle={() => handleAccordionToggle(5)}
        />
        <Accordian
          question="  How can I book an appointment?  "
          answer="  You can click on the book appointment link.  "
          isOpen={openAccordionIndex === 6}
          onToggle={() => handleAccordionToggle(6)}
        />
        <Accordian
          question=" Do I need to bring anything at my first appointment? "
          answer="  You may bring the following documents, if available: ID Proof Prior medication list Any prior diagnosis documentation X-RAY reports "
          isOpen={openAccordionIndex === 7}
          onToggle={() => handleAccordionToggle(7)}
        />
      </div>
    </section>
  );
};

export default FAQ;
