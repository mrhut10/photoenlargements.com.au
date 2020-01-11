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
      }
    `
  );
  return data;
};

export default useGraphqlQueries;
