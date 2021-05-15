import { graphql, useStaticQuery } from 'gatsby';

export const getCertificates = () => {
  const getCertificatesResult = useStaticQuery(graphql`
    query getCertificates {
      allApiJson {
        edges {
          node {
            certificates {
              filename
              name
            }
          }
        }
      }
    }
  `);

  const certificates =
    getCertificatesResult.allApiJson.edges[0].node.certificates;

  return certificates;
};
