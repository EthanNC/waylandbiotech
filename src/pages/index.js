import React from "react"
import { Link } from "gatsby"

import science from "../images/science.png"
import Video from "../components/video"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Video src="/Covid-19.mp4"/>
    <div class="flex pt-48 md:py-16 justify-center">
      <div class="p-20 text-center">
        <div class=" text-gray-300 md:text-3xl text-3xl font-bold">Wayland Biotherapeutics</div>
        <div class=" text-gray-300 text-xl font-normal mt-4">Novel Therapeutics for Covid-19 and Cancer Using Receptor Decoys</div>
        <div class=" text-gray-300 mt-6 flex justify-center relative">
          <Link to="contact">
          <button class="bg-red-800 text-gray-300 p-4 shadow-lg font-bold hover:text-white">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
    
    <div class="flex flex-wrap px-12  py-10 bg-black ">
    <div class="w-full md:w-2/4 text-gray-300">
      
      <div class="pt-10 px-8 lg:max-w-screen-md">
        <div class="text-3xl uppercase"> About Us </div>
        <div class="">
        Core management team share backgrounds that include over 30 years of experience each in biotech/biopharma, including expertise in large and small molecule drug discovery and development, protein and glycoprotein engineering, virology, rapid pandemic response, cell adhesion, and structural biology to generate novel therapies for the treatment of cancer, inflammation, and infectious disease.
          <Link to="about">
          <button class="float-right underline text-white px-8 py-4 shadow-lg font-bold hover:text-red-500">
            Learn More
          </button>
          </Link>
        </div>
        </div>
    </div>
    <div class="w-full md:w-2/4 text-gray-300">
    <div class="pt-10 px-8 lg:max-w-screen-md">
        <div class="text-3xl uppercase"> Covid-19 </div>
        <div class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem iusto alias! Saepe, explicabo? Excepturi eveniet, laborum iste veritatis, sapiente mollitia quae quod magnam unde, error debitis accusantium veniam quos!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor facere deserunt suscipit ex iure quod, ipsum velit earum dicta assumenda fuga nisi esse accusantium optio error debitis doloribus quia cupiditate.
          <Link to="covid">
        <button class="float-right underline text-white px-8 py-4 shadow-lg font-bold hover:text-red-500">
          Covid Response
        </button>
        </Link>
        </div>
        </div>
    </div>
    <div class="w-full px-8 text-gray-300 mt-4 lg:max-w-screen-md">
    <div class="text-3xl uppercase"> Our Science </div>
    <div class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eius ullam aperiam ipsam explicabo, incidunt accusamus nulla et perferendis illo blanditiis nesciunt! Mollitia, consequuntur laudantium ipsum eum temporibus assumenda ad</div>
    <Link to="platform">
          <button class="float-right underline mr-8 text-white font-bold hover:text-red-500">
            Read On
          </button>
          </Link>
    </div>
    </div>
  </Layout>
)

export default IndexPage
