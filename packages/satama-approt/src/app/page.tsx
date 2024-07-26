import sanityClient from 'sanityClient'
import { PAGE } from 'queries'
import fetchOptions from 'util/fetchOptions'
const Home = async () => {
  const data: any = await sanityClient.fetch(PAGE)
  console.log(data)
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Satama Approt!</p>
    </div>
  )
}

export default Home
