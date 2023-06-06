import pc from "../../assets/pc.jpg";
import browser from "../../assets/browser.jpg";
import all from "../../assets/all.jpg";

interface PlatformListProps {
  name: string;
  image: string;
}

export const platformList: PlatformListProps[] = [
  { name: "pc", image: `${pc}` },
  { name: "browser", image: `${browser}` },
  { name: "all", image: `${all}` },
];
