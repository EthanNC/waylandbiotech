import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Ray from "../images/RC.png"

const RC = () => {
    return (
        <Layout>
        <SEO title="Ray Camphausen"/>
        <div class="bg-white">
              <div class="flex justify-center items-center flex-wrap py-48 px-8 md:px-32 lg:px-64">
              <img src={Ray}/>
              <h1 class="text-center text-2xl font-bold p-2">Ray T. Camphausen, Ph.D., CEO</h1>
              <p class="mt-4">
              Dr. Ray Camphausen has more than 30 year of industrial experience in the discovery, research, and early development of biotechnology and pharmaceutical candidates. Prior to joining Nashoba Biotechnology, Dr. Camphausen served as Associate Vice President, Research Fellow, and Director for 15 years at Bristol Myers-Squibb and Adnexus Therapeutics, a biotech company acquired by BMS in 2007. His focus at BMS/Adnexus was on the discovery and protein engineering of a variety of therapeutic candidates, including antibodies, alternative scaffold proteins, and other biologics in the areas of cancer, inflammation, and cardiovascular disease. In 2002, Dr. Camphausen served as Vice President, Research and Discovery at Thios Pharmaceutics, Inc., a biotech company focused on the discovery and development of small molecule and protein inhibitors in the general area of carbohydrate and protein sulfation. From 1987 to 2002, Dr. Camphausen rose from a research scientist to Associate Director at Genetics Institute, Inc./Wyeth/Pfizer. He researched the structure and function of a variety of protein-carbohydrate interactions that lead to the advancement of both glycoprotein and small molecule therapeutic candidates.
              </p>
              <p class="mt-4">
              Dr. Camphausen received his Ph.D. in Microbiology from Colorado State University and a B.A. in Biology from University of California, San Diego. He is the co-author and co-inventor of more than 75 publications, scientific presentations, and patents.
              </p>
              </div>
        </div>
        </Layout>
    )
}

export default RC