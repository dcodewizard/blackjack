import Image from "next/image";
import Link from "next/link";

import NewGameButton from "@/components/NewGameButton";
import { routes } from "@/routes";
import { GAME_NAME } from "@/constants";
import { CARDS_IMG_URL } from "@/assets";

const Home = () => (
  <>
    <Image
      src={CARDS_IMG_URL}
      alt="blackjack"
      width="250"
      height="250"
      priority
      className="landing-img"
    />
    <h1 className="blackjack-title">{GAME_NAME}</h1>
    <Link href={routes.game}>
      <NewGameButton />
    </Link>
  </>
);

export default Home;
