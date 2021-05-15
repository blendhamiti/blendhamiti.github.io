import { graphql, useStaticQuery } from 'gatsby';
import { TCertificate } from './types';

export const getCertificates = () => {
  const getCertificatesResult = useStaticQuery(
    graphql`
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
    `
  );

  const certificates = getCertificatesResult.allApiJson.edges.map(
    (edge): TCertificate => {
      return {
        name: edge.node.name,
        filename: edge.node.filename,
      };
    }
  );

  return certificates;
};
