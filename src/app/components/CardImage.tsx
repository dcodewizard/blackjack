import Image from "next/image";

import { CardImageProps } from "@/types";
import { CARD_BACK_IMG_URL } from "@/assets";

const CardImage = ({ src }: CardImageProps) => (
  <Image
    src={src}
    width="100"
    height="100"
    alt="card"
    className="card-img"
    placeholder="blur"
    blurDataURL={CARD_BACK_IMG_URL}
  />
);

export default CardImage;
