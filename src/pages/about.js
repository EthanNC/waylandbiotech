import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import DC from "../images/DC.png"
import RC from "../images/RC.png"

const About = () => (
    <Layout>
        <SEO title="About Us" />
        <div class="bg-white">
            <div class="py-48 px-8 md:px-32 lg:px-64">
            <h1 class="text-center text-2xl font-bold">Founders</h1>
            <p class="mt-2">
                Core management team share backgrounds that include over 30 years of experience each in biotech/biopharma, including expertise in large and small molecule drug discovery and development, protein and glycoprotein engineering, virology, rapid pandemic response, cell adhesion, and structural biology to generate novel therapies for the treatment of cancer, inflammation, and infectious disease.
            </p>
            <div class="flex flex-row justify-center mt-2">
                <div class="md:flex bg-white text-center p-6 m-2 md:mr-6 shadow-lg">
                    <img class="h-16 w-16 md:h-24 md:w-24 mx-auto" src={RC} alt="Ray"/>
                    <div class="text-center md:text-left p-4">
                        <h2 class="text-lg">Ray Camphausen, Ph.D</h2>
                        <div class="text-gray-600">CEO</div>
                        {/* <div class="text-gray-600">Contact Info</div> */}
                    </div>
                </div>
                <div class="md:flex bg-white text-center p-6 m-2 md:mr-6 shadow-lg">
                    <img class="h-16 w-16 md:h-24 md:w-24 mx-auto" src={DC} alt="Dale"/>
                    <div class="text-center md:text-left p-4">
                        <h2 class="text-lg">Dale Cumming, Ph.D</h2>
                        <div class="text-gray-600">CSO</div>
                        {/* <div class="text-gray-600">Contact Info</div> */}
                    </div>
                </div>
            </div>
            <div class="p-4 mt-8">
                <h1 class="text-center text-2xl font-bold" >Misson</h1>
                <p class="mt-2">
                Our mission is to discover and develop novel biologics exploiting receptor decoy technology to create novel medicines for the treatment of human diseases such as cancer and infectious disease. 
              </p>
            </div>
            </div>
        </div>
    </Layout>
)

export default About