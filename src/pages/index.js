import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="flex bg-white py-24 justify-center rounded" >
      <div class="p-12 text-center max-w-2xl">
        <div class="md:text-3xl text-3xl font-bold">Want to discover more?</div>
        <div class="text-xl font-normal mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </div>
        <div class="mt-6 flex justify-center relative">
          <button class="bg-black text-white p-4 shadow-lg font-bold hover:text-red-500">Learn More</button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
