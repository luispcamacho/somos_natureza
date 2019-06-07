import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <div style={{padding:'1em', display:'flex'}}>
      <h1 style={{display: 'inline', width: `100%`, margin: `28vh 0`}} id="header">#SomosNatureza</h1>
      {/* <div style={{right: `0px`, position: 'fixed', margin: '-2.5em 1em'}}>
        <h1 style={{display: 'inline'}} id="header">Blog</h1>
        <h1 style={{display: 'inline'}} id="header">Eventos</h1>
      </div> */}
    </div>
    {/* <Image /> */}
    
  </Layout>
)

export default IndexPage
