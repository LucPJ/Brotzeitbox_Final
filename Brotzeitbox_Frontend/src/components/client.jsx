import * as contentful from 'contentful';
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE;
const accessTokenID = import.meta.env.VITE_ACCESS_TOKEN;

export const client = contentful.createClient({
    space: spaceId,
    accessToken: accessTokenID,
});