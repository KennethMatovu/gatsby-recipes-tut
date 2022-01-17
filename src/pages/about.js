import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy.</h2>
            <p>
              Taximdermy forage glossier letterpress heirdom before they sold
              out you probably haven't heard of them banh mi dossier.
            </p>
            <p>
              Taiki tumblr flexitarian jean shorts brunch aesthetic salvia nero.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          {/* //className is added to the wrapper, not the image itself */}
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person poring salt in boul"
            className="about-img"
            placeholder="dominantColor"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome source</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { order: ASC, fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
