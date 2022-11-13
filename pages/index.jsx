import FavouriteProjects from "@components/FavouriteProjects";
import LatestCode from "@components/LatestCode";
import Hero from "@components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <>
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories: repositories || [],
    },
  };
};

