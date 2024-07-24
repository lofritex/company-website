import HomeEndSection from "./Sections/HomeEndSection";
import HomeServices from "./Sections/HomeServices";
import HomeTopSection from "./Sections/HomeTopSection";

export default function HomePage() {
  return (
    <div>
      <HomeTopSection/>
      <HomeServices/>
      <HomeEndSection/>
    </div>
  );
}
