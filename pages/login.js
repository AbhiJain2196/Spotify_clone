import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-fu;; justify-center">
      <Head>
        <title>Spotify</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/174/174872.png"
        />
      </Head>

      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />

      {Object.values(providers).map((provider) => (
        <div>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18d860] text-white p-5 rounded-full"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
