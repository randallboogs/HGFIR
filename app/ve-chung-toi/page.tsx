import AboutClient from '@/components/AboutClient';
import { wpFetch, GET_HOME_PAGE_CONTENT } from '@/lib/wp';

async function getAboutData() {
  try {
    // We can fetch page-specific content here
    const data = await wpFetch<any>(GET_HOME_PAGE_CONTENT, { id: 've-chung-toi' });
    return data?.page || null;
  } catch (error) {
    console.warn('Could not fetch about data from WordPress');
    return null;
  }
}

export default async function AboutPage() {
  const data = await getAboutData();
  
  // Note: For now, we use the client component which still has fallback text.
  // In a full implementation, we would pass 'data' to AboutClient to override sections.
  return <AboutClient />;
}
