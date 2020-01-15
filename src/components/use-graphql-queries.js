import { useStaticQuery, graphql } from 'gatsby';

const useGraphqlQueries = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            phone
            googleMapsLink
          }
        }
        allShopifyProduct {
          nodes {
            images {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            title
            id
          }
        }
        heroImage: file(name: { eq: "hero" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        photoPile: file(name: { eq: "photo-pile" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        scrapbookPrinting: file(name: { eq: "scrapbook-printing" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        canvasPrinting: file(name: { eq: "canvas-printing" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return data;
};

export default useGraphqlQueries;
