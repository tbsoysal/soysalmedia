import { useState } from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

type Props = {
  index: number,
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer, index }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div key={index} className={`py-6 px-2 text-white cursor-pointer ${index > 0 ? '!border-t-[0.5px] border-[#232c3e]' : ''}`}>
      <div onClick={toggleFaq} className="flex justify-between items-center gap-[5%]">
        <div className="lg:text-[24px]">{question}</div>
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mt-5 font-light lg:text-[24px]">{answer}</div>
        </motion.div>
      )
      }
    </div>

  )
}

export default FaqItem
