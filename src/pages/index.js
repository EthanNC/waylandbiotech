import React from "react"
import { Link } from "gatsby"

import science from "../images/science.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div 
    style={{
        backgroundImage: `url(${science})`,
        // backgroundSize: '1024px',
        backgroundRepeat: 'no-repeat'
      }}
    class=" flex bg-transperant shadow-lg py-24 justify-center">
      <div class="p-20 text-center">
        <div class="md:text-3xl text-3xl font-bold">Want to discover more?</div>
        <div class="text-xl font-normal mt-4 shadow-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </div>
        <div class="mt-6 flex justify-center relative">
          <button class="bg-black text-white p-4 shadow-lg font-bold hover:text-red-500">Learn More</button>
        </div>
      </div>
    </div>
    <div>
    
    </div>
  </Layout>
)

export default IndexPage
