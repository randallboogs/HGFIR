import { request, gql } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://dev-hgfir-headless.pantheonsite.io/graphql';

/**
 * Utility function to fetch data from WordPress GraphQL
 */
export async function wpFetch<T>(query: string, variables = {}): Promise<T> {
  try {
    const data = await request<T>(API_URL, query, variables);
    return data;
  } catch (error) {
    console.error('WordPress Fetch Error:', error);
    throw new Error('Failed to fetch data from WordPress');
  }
}

// Query to get projects for the Home page
export const GET_PROJECTS = gql`
  query GetProjects {
    posts(where: { categoryName: "Projects" }, first: 4) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;

// Query specifically for Home Page sections
export const GET_HOME_PAGE_CONTENT = gql`
  query GetHomePageContent {
    page(id: "home", idType: URI) {
      title
      content
      # Add ACF fields here if user installs ACF
    }
  }
`;
