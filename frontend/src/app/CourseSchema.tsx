export default function CourseSchema({ title, description, url }: { title: string, description: string, url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalCourse",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "TutorialsPoint Clone",
      "sameAs": "https://www.example.com"
    },
    "url": url,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT10H"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}