import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <div style={{padding:'1em'}}>
      <h1 style={{display: 'inline', width: `100%`}} id="header">#Somos Natureza</h1>
      <div style={{right: `0px`, position: 'fixed', margin: '-2.5em 1em'}}>
        <h1 style={{display: 'inline'}} id="header">Blog</h1>
        <h1 style={{display: 'inline'}} id="header">Eventos</h1>
      </div>
    </div>
    <Image src="lobo_iberico.jpg" />
    
  </Layout>
)

export default IndexPage
