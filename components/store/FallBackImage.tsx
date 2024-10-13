import Image from 'next/image';

interface IFallBackImageProps{
  classes?: string
  width?: number
  height?: number
  text?: string
}

const FallBackImage = ({ classes, width=200, height=300, text="error" }: IFallBackImageProps) => {
  return (
    <Image className={classes} src={`https://placehold.co/${width}x${height}?text=${text}`} alt="" width={width} height={height}/>
  );
};

export default FallBackImage;