import 'dotenv/config'
import { createClient } from 'next-sanity'

const sanityClient = createClient({
  projectId: 'ubo8m1s0',
  dataset: 'dumppi-sides',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
  apiVersion: '2021-03-25'
})

export default sanityClient
