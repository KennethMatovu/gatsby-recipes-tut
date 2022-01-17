import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Chartreuse health goth tbh fashion axe hella, poke coloring book
              fingerstache single-origin coffee yuccie wolf activated charcoal
              tattooed venmo. Shaman kitsch direct trade migas biodiesel.
            </p>
            <p>
              Semiotics jean shorts distillery pour-over pinterest tousled next
              level VHS quinoa edison bulb.
            </p>
            <p>Dummy text? More like dummy thicc text, amirite?</p>
          </article>

          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mgedokpv"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email </label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                {" "}
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Featured Recipes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>{" "}
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

export default Contact
