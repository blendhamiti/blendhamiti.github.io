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

  console.log(getCertificatesResult);

  const certificates = getCertificatesResult.allApiJson.edges[0].node.certificates.map(
    (certificate): TCertificate => {
      return {
        name: certificate.name,
        filename: certificate.filename,
      };
    }
  );

  return certificates;
};
