"use client";
import Image from "next/image";

interface AccordianProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordian: React.FC<AccordianProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="w-full h-max cursor-pointer">
      <div
        className="flex items-center justify-between bg-[#f7f7f7] p-3"
        onClick={onToggle}
      >
        <h4 className="text-[14px] text-[#8b8080]">{question}</h4>
        <Image src="/assets/arrow.svg" alt="arrow" width={24} height={24} />
      </div>
      {isOpen && (
        <div className="flex items-center bg-white p-3">
          <h4 className="text-[12px]">{answer}</h4>
        </div>
      )}
    </div>
  );
};

export default Accordian;
