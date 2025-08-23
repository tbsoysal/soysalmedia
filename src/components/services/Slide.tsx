type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const Slide = ({ icon, title, text }: Props) => {
  return (
    <div className="flex flex-col text-white">
      {icon}
      <h3 className="mb-12 text-[18px]">{title}</h3>
      <p className="text-[14px]">{text}</p>
    </div>
  )
}

export default Slide
