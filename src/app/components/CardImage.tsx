import Image from "next/image";

import { CardImageProps } from "@/types";

const CardImage = ({ src }: CardImageProps) => (
  <Image src={src} width="100" height="100" alt="card" className="card-img" />
);

export default CardImage;
