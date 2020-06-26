import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import image from "../images/covid.jpg"
import Video from "../components/video"
import budding from "../images/budding.jpg"
const Covid = () => (
    <Layout>
      <SEO title="Covid" />
      <div class="bg-white">
            <div class="py-24 px-8 md:px-32 lg:px-64">
            <figure>
            <Video src="/covid.mp4"/>
            {/* <figcaption class="leading-tight text-xs float-right text-gray-800">Source: NIAID</figcaption> */}
            </figure>
            <h1 class="text-center text-2xl font-bold my-8">Pursuing a Rapid Response to the Pandemic of the Century</h1>
            <p class="mt-4">Wayland Biotherapeutics is seeking to meet the unique biomedical challenge presented by the current pandemic outbreak of the coronavirus SARS-CoV-2, the causative agent of Covid-19. There are currently no vaccines for SARS-CoV-2 and there are no approved therapeutic agents that can significantly impact the course of the pandemic outbreak. Wayland Biotherapeutics is committed to bringing just such a new therapeutic agent to the clinic in a timeframe and quantity to meaningfully impact the current outbreak.</p>
            <p class="mt-4">
            To achieve this goal, Wayland Biotherapeutics is focused on the role of the host protein LY6E, a known modulator of viral infectivity. There are several reasons for focusing on LY6E in the context of SARS-CoV-2:
            </p>
            <ul class="list-disc list-inside pl-4 py-4 ">
              <li>LY6E is an important molecular component of innate immune defense against certain viruses, including influenza and HIV-1</li>
              <li>LY6E restricts (blocks) SARS-CoV-2 infection of cells</li>
              <li>LY6E restricts most known coronaviruses that infect humans</li>
              <li>Restriction occurs by blocking cell entry by the virus</li>
              <li>LY6E binds to the spike (S) protein of SARS-CoV-2.</li>
              <li>LY6E restriction of SARS-CoV-2 requires expression of TMPRSS2, the host membrane protease that activates the viral S protein for cell entry by cleavage at a specific site in the S2 domain generated by a prior protease (furin) cleavage</li>
            </ul>
            <figure>
            <img class="py-4" src={budding}/>
            <figcaption class="leading-tight text-xs float-right text-gray-800">A new crop of virions (pink) emerge from their host cells. Source: NIAID</figcaption>
            </figure>
            <p class="mt-8">Wayland Biotherapeutics is creating decoy receptors containing LY6E with the goal of enhancing the LY6E restriction of SARS-CoV-2 and preventing viral entry into the cell.</p>
            <p class="mt-4">This “augmentation” therapy has several key attributes worthy of note:</p>
            <ul class="list-disc list-inside pl-4 py-4 ">
              <li>The decoy receptor therapeutic will be broad spectrum</li>
              <li>The decoy receptor uses a host protein and should experience little evolutionary “drift”</li>
              <li>Time to the clinic is greatly aided by tapping into the vast development and regulatory infrastructure existing for antibody therapeutics</li>
            </ul>
            <p class= "mt-4">Please check this space frequently to keep current on our progress towards this important goal.</p>
            </div>


        </div>

    </Layout>
)

export default Covid