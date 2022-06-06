import React from "react"
import { graphql } from "gatsby";


export default function Home({data}) {
  console.log(data);
  return <div>Hello world!</div>
}
export const data = graphql `
  query PageQuery {
    allWpPage {
      nodes {
        slug
        sections {
          sections {
            ... on WpPage_Sections_Sections_Text {
              title
            }
          }
        }
      }
    }
  }
`