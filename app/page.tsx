import { wpFetch, GET_PROJECTS } from '@/lib/wp';
import HomeClient from '@/components/HomeClient';

// Static fallback data in case WordPress is not connected yet
const fallbackProjects = [
  {
    id: 1,
    title: 'Căn hộ The Sun Avenue',
    category: 'Căn hộ',
    image: 'https://picsum.photos/seed/interior1/800/600',
  },
  {
    id: 2,
    title: 'Biệt thự Thảo Điền',
    category: 'Nhà phố / Biệt thự',
    image: 'https://picsum.photos/seed/interior4/800/600',
  },
  {
    id: 3,
    title: 'Văn phòng TechHub',
    category: 'Văn phòng',
    image: 'https://picsum.photos/seed/office1/800/600',
  },
  {
    id: 4,
    title: 'Homestay Da Lat',
    category: 'AirBnb',
    image: 'https://picsum.photos/seed/airbnb1/800/600',
  },
];

async function getProjects() {
  try {
    const data = await wpFetch<any>(GET_PROJECTS);
    if (!data?.posts?.nodes || data.posts.nodes.length === 0) {
      return fallbackProjects;
    }
    
    return data.posts.nodes.map((post: any) => ({
      id: post.id,
      title: post.title,
      category: post.categories?.nodes[0]?.name || 'Dự án',
      image: post.featuredImage?.node?.sourceUrl || 'https://picsum.photos/seed/interior/800/600',
    }));
  } catch (error) {
    console.warn('Could not fetch projects from WordPress, using fallback data.');
    return fallbackProjects;
  }
}

export default async function HomePage() {
  const projects = await getProjects();

  return <HomeClient initialProjects={projects} />;
}
