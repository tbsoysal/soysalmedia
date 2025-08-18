import { FaDownload } from "react-icons/fa6";

type Props = {
  buttonType: 'primary' | 'secondary';
}

const CtaButton = (props: Props) => {
  let btn = <a className="cursor-pointer block py-[12px] w-full text-center bg-linear-to-r from-[#2c55de] to-[#5243ad] text-white rounded-[4px]">Hemen Başlayın</a>;
  if (props.buttonType == 'secondary') {
    btn = <a className="cursor-pointer flex items-center gap-2 justify-center py-[12px] w-full text-center bg-[#141926] text-white rounded-[4px]">Sunumu indir<FaDownload /></a>;
  }
  return (
    btn
  )
}

export default CtaButton
