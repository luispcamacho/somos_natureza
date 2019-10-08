import React from 'react';
import Layout from '../components/layout'
import BgImageSlider from '../components/image'
import { StaticQuery, graphql } from "gatsby"

const IndexPage = ({ data, errors }) => {
  //showSlides({ imageBgNodes });
  if (errors) {
    return (
      <Layout>
        
      </Layout>
    );
  }
  
  return (<StaticQuery
    query={graphql`
      query {
        allFile(filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: {eq: "Banners"} }) {
          edges {
            node {
              id
              name
              relativeDirectory
              childImageSharp {
                fluid(maxWidth: 915, quality: 70) {
                  aspectRatio
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (<Layout>
          <BgImageSlider style={{overflow:'hidden'}} imageSlides={data.allFile.edges}/>
      </Layout>)
    }}
  />
    
  );
};

export default IndexPage;