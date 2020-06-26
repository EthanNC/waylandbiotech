import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Dale from "../images/DC.png"

const DC = () => {
    return (
        <Layout>
        <SEO title="Dale Cumming"></SEO>
        <div class="bg-white">
              <div class="flex justify-center items-center flex-wrap py-48 px-8 md:px-32 lg:px-64">
              <img src={Dale}/>
              <h1 class="text-center text-2xl font-bold p-2">Dale A. Cumming, Ph.D., CSO</h1>
              <p class="mt-4">
              Dr. Cumming has over 30 years of experience in biotechnology product development and discovery research. Dr. Cumming began his career at Genetics Institute involved with the development of many of the earliest CHO-recombinant therapeutics such as EPO, tPA, and Factor VIII. Subsequently, he worked in discovery research as Director of Structural Biology and was project leader for a tripartite corporate alliance on cell adhesion. Subsequently, he served as VP of Discovery Research at GlycoDesign, working on small molecule therapeutics for cancer and other disease indications. From 2003, Dr. Cumming was a co-founder and CEO of Translational Medicines, a startup focused upon developing therapeutics for cancer and inflammation by modulating the trafficking of immune and adult stem cells. From 2007, he was with the non-profit organization ICAV (International Consortium on Anti-Virals), since 2012 as their CSO, focusing on antibody therapeutics for epidemic/pandemic infectious disease outbreaks. His research areas of interest included immunology, glycobiology, biophysics, and structural biology, especially in the areas of cancer, inflammation, and infectious disease. Dr. Cumming received his Ph.D. in Molecular Biology from Vanderbilt University and a B.Sc. in Biochemistry (summa cum laude) from the College of Biological Sciences, University of Minnesota, Twin Cities.
              </p>
              </div>
        </div>
        </Layout>
    )
}

export default DC
