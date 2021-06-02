import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'next-sanity';

const config = {
  //projectId: process.env.SANITY_PROJECT_ID,
  projectId: 'gnixomt0',
  dataset: 'production',
  apiVersion: '2021-03-25', //sanity api
  useCdn: false, //recommended false for development purposes
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
