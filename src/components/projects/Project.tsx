type Props = {
  imagePath: string;
  liveUrl: string;
}

const Project = ({ imagePath, liveUrl }: Props) => {
  return (
    <a href={liveUrl}>
      <img className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-[8px]" src={imagePath} />
    </a>
  )
}

export default Project
