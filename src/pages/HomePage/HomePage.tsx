import { ExploreCategory } from "./ExploreCategory";
import { HomeHeader } from "./HomeHeader";

export function HomePage() {
  return (
    <main className="flex justify-center flex-col items-center">
      <HomeHeader />
      <ExploreCategory />
    </main>
  );
}

export default HomePage;
