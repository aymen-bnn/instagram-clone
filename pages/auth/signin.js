import { getProviders, signIn as signIntoProvider } from "next-auth/react"
import Header from "../../components/Header"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

export default function signIn({ providers }) {
  return (
    <>
      <Header/>
      <div className="flex flex-col justify-center items-center py-20">
        <img className="w-80" alt="" src="https://links.papareact.com/ocw"/>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <div 
            onClick={() => signIntoProvider(provider.id , {callbackUrl:'/'})}
            className="p-3 bg-blue-500 text-white flex items-center rounded-md mt-10">
            <button 
              className="font-bold mr-3">
              Sign in with {provider.name}
            </button>
            <GlobeAltIcon className="h-7 w-7" />
            </div>
          </div>
      ))}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}