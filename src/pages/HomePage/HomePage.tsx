import { ExploreCategory } from "./ExploreCategory";
import { HomeHeader } from "./HomeHeader";
import { StreamSection } from "./StreamSection";

export function HomePage() {
  return (
    <main className="flex justify-center flex-col items-center">
      <HomeHeader />
      <ExploreCategory />
      <StreamSection />
    </main>
  );
}

export default HomePage;
