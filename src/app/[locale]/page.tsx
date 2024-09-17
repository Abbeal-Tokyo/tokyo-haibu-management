import { getSession } from "@/lib/authentication/session";

const Home = async () => {
  const session = await getSession();

  return <h2>WELCOME {session?.user?.first_name}</h2>;
};

export default Home;
