import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (<StaticQuery
  query={graphql`
    query {
      backgroundImage: file(relativePath: { eq: "lobo_iberico.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}

    // Peneda-Gerês-National
  render={data =>
    <BackgroundImage style={{height:`80vh`}}
      fluid={data.backgroundImage.childImageSharp.fluid} >
      <h2 id="caption">Pelo Reconhecimento dos Direitos do Lobo Ibérico</h2>
    </BackgroundImage>
  }
/>)

  const StyledBackgroundSection = styled(Image)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;`


export default StyledBackgroundSection
