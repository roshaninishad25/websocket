const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.tutorialspointclone.com';

// Simulated DB fetch for dynamic routes
const getDynamicRoutes = () => {
  const courses = ['react-basics', 'nextjs-routing', 'state-management'];
  const blogs = Array.from({ length: 20 }, (_, i) => `post-${i + 1}`);
  
  const coursePaths = courses.map(c => `/courses/${c}`);
  const blogPaths = blogs.map(b => `/blog/${b}`);
  
  return [...coursePaths, ...blogPaths];
};

const generateSitemap = () => {
  const staticRoutes = [
    '',
    '/courses',
    '/blog',
    '/tutorials',
  ];

  const dynamicRoutes = getDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('sitemap.xml generated successfully in frontend/public/sitemap.xml!');
};

generateSitemap();
