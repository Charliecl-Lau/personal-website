export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'microbridge-startup',
    title: 'The "Vibe Coding" Trap: How My Startup Failed, and Why I Don\'t Regret It',
    excerpt: 'A reflection on the challenges of AI-assisted development and the importance of technical architecture.',
    date: 'Dec. 26, 2025',
    readTime: '10 min read',
    slug: '/projects/microbridge-startup'
  }
];
