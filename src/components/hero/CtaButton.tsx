import { FaDownload } from "react-icons/fa6";
import { messageToWhatsapp } from "@/utils/whatsapp";

type Props = {
  buttonType: 'primary' | 'secondary';
}

const CtaButton = (props: Props) => {

  const baseClasses = "cursor-pointer py-[12px] w-full text-center text-white rounded-[4px] lg:px-[32px] lg:py-[24px]";

  const buttonVariants = {
    primary: {
      styles: `${baseClasses} bg-gradient-to-r from-[#2c55de] to-[#5243ad]`,
      content: "Hemen Başlayın"
    },
    secondary: {
      styles: `${baseClasses} bg-[#141926] flex items-center gap-2 justify-center`,
      content: (
        <>
          Sunumu indir
          <FaDownload />
        </>
      )
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.buttonType === 'primary') {
      e.preventDefault();
      messageToWhatsapp();
    }
  }

  return (
    <a onClick={handleClick} className={buttonVariants[props.buttonType].styles || buttonVariants.primary.styles}>
      {buttonVariants[props.buttonType].content || buttonVariants.primary.content}
    </a>
  )
}

export default CtaButton
