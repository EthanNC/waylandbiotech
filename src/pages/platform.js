import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import protein from "../images/sprotein.png"
import cancer from "../images/cancer.png"

const Platform = () => (
    <Layout>
      <SEO title="Platform" />
           <div class="bg-white">
            <div class="py-24  px-8 md:px-32 lg:px-64">
            <h1 class="text-center text-2xl font-bold">Our Science</h1>
            <div class="font-bold my-2">About Receptor Decoys</div>
            <p class="mt-2">A decoy receptor is a molecule that binds to a specific ligand outside of its normal biological context. In their original construct, decoy receptors targeted inflammatory cytokines but were otherwise incapable of signaling. Thus, they are negative regulators which act as molecular traps for a ligand and its cognate signaling receptor.  Or, decoy receptors can serve as a scavenger receptor, driving ligands to alternate functional targets, for example, such as specific cell types or cellular degradative compartments.</p>
            <p class="mt-2">When used by protein engineers, receptor decoys can be instruments of manipulation, created using molecular biology and biotechnology techniques to achieve select scientific or medical goals. Indeed, Enbrel®, Eylea®, and Kineret® are all examples of FDA-approved biologics currently used to treat a variety of medical conditions.</p>
            <div class="font-bold my-2">Focus on LY6E</div>
            <p class="mt-2">
            Lymphocyte antigen 6 complex, locus E (LY6E) is a glycosylphosphatidylinositol (GPI) -linked protein of a mere 133 amino acids in length. The GPI moiety anchors the protein to the cell membrane.  LY6E is also known as Thymic Shared Antigen-1 (TSA-1) or Stem Cell Antigen-2 (SCA-2). LY6E is member of the canonical lymphocyte antigen-6/urokinase-type plasminogen activator receptor (Ly6/uPAR) superfamily of proteins.
            </p>
            <p class="mt-2">
            The Ly6/uPAR superfamily is composed of 35 human and 61 mouse members. Some members, but not all, are GPI-linked proteins. The GPI moiety anchors the protein to the cell surface membrane. The entire superfamily of proteins is structurally related, sharing an 80 amino acid domain containing ten cysteines arranged in a specific spacing pattern that allows five distinct disulfide bridges which create a characteristic “three-fingered” structural motif. Well known members of the human family include the complement regulatory protein CD59, the neutrophil-specific antigen and CD31 counter-receptor CD177, and prostate stem cell antigen (PSCA). 
            </p>
            <p class="mt-2">
            For such a small protein, LY6E carries a big functional punch. LY6E was first observed in a phenotypically immature or nonmature subpopulation of CD4-CD8- mouse thymocytes and through the 1990’s was shown to play a role in a variety of biological processes including immunological regulation (notably T-cell activation), T cell physiology, development, and oncogenesis.  Starting in 2001, reports began to appear establishing a functional role for LY6E in various viral infections. 
            </p>
            <p class="mt-2">
            More recent observations have captured the attention of Wayland Biotherapeutics, especially as regards novel therapeutic approaches to viral infections and cancer. LY6E is an interferon stimulating gene and is thus an important component of innate immune defense against viruses and cancer. In addition, LY6E has emerged as an exciting new target for therapeutic intervention in cancer. Finally, it has been reported that LY6E restricts the infectivity of most human coronaviruses including SARS-CoV-2, the causative agent of Covid-19 infections.
            </p>
            <figure>
            <img src={protein}/>
            <figcaption class="leading-tight text-xs float-right text-gray-800 mb-6">The SARS-CoV-2 Spike Protein (red; responsible for binding of the virus to a target cell) interacting with part of a human neutralizing antibody (green); Image source: Carvogu, Wikimedia Commons</figcaption>
            </figure>
            <div class="font-bold my-2">Infectious Viral Disease</div>
            <p class="mt-2">
            Initial reports on LY6E and viral infections largely established a genetic association between LY6E and susceptibility to viruses such as Marek's disease virus (MDV), mouse adenovirus type 1 (MAV-1), and HIV-1. More detailed studies illuminated cell type-specific and differing roles for LY6E in HIV infection, one role where LY6E promotes HIV infection in CD4 high cells, but also a role where it inhibits HIV infection in CD4low cells. Similarly, several studies found that LY6E enhances infection for a select number of enveloped RNA viruses including flaviviruses (yellow fever virus, dengue virus, Zika virus, West Nile virus) and influenza A virus. Thus, LY6E modulates the entry of infectious viruses in a cell-type and virus-specific manner. 
            </p>
            <p class="mt-2">
            Of special interest is the role of LY6E in the infectivity of SARS-CoV-2 virus, the causative agent of the current Covid-19 pandemic. Recent reports demonstrate that LY6E restricts SARS-CoV-2 infectivity
            </p>
            <figure>
            <img class="pt-8 pb-4" src={cancer}/>
            <figcaption class="leading-tight text-xs float-right text-gray-800 ">Metastatic Melanoma Cells. Photo Credit: National Cancer Institute on Unsplash</figcaption>
            </figure>
            <div class="font-bold mb-2 mt-8">Cancer</div>
            <p class="mt-2">
            Targeting LY6E in cancer is an exciting new opportunity for a couple of reasons. Increased expression of LY6E is associated with poor overall survival in renal papillary cell carcinoma and in pancreatic ductal adenocarcinoma.  On the other hand, elevated expression of LY6E is associated with better long-term survival in renal clear cell cancer.  Indeed, LY6E is broadly expressed at high levels in diverse cancer types including several cancers currently with limited therapeutic options and poor outlooks. These challenging cancers include ovarian, pancreatic, lung, gastric, and triple-negative breast cancer.
            </p>
            <p class="mt-2">
            Wayland Biotherapeutics is focused on the application of engineered chimeric antigen receptors containing LY6E expressed in either T-cells or NK cells (CAR-T or CAR-NK) as novel cell therapeutics for the treatment of the most challenging cancers. 
            </p>
            </div>
            
        </div>

    </Layout>
)

export default Platform