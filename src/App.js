import {
  Layout,
  TopRated,
  NowPlaying,
  Upcoming,
  Popular,
  Hero,
} from "./components";

export default function App() {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-col mt-4 gap-6">
        <TopRated />
        <Upcoming />
        <NowPlaying />
        <Popular />
      </div>
    </Layout>
  );
}
