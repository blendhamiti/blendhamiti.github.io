import { TCertificateImage } from './types';

export const getSiteMetadata: (data: any) => any = (data) =>
  data.site.siteMetadata;

export const getApiData: (data: any, entity: string) => any = (data, entity) =>
  data.allApiJson.edges.filter((edge) => edge.node[entity])[0].node[entity];

export const getCertificateImages: (data: any) => TCertificateImage[] = (
  data
) =>
  data.allImageSharp.edges.map(
    (edge): TCertificateImage => {
      return {
        filename: edge.node.gatsbyImageData.images.fallback.src.split('/')[4],
        image: edge.node.gatsbyImageData,
      };
    }
  );
