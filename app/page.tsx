import { ProjectInterface } from '@/common.types';
import ProjectCard from '@/components/ProjectCard';
import { fetchAllProjects, makeGraphQLRequest } from '@/lib/actions';

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

const query = `
  query getProjects {
    projectSearch(
      first: 10
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          githubUrl
          description
          liveSiteUrl
          id
          image
          category
          createdBy {
            id
            email
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

export default async function Home() {
  const {
    projectSearch: { edges: projects },
  } = (await makeGraphQLRequest(query)) as ProjectSearch;

  return (
    <section className="flex-start flex-col paddings mb-16">
      {projects.length > 0 ? (
        <section className="projects-grid">
          {projects.map(({ node }) => (
            <ProjectCard
              key={node.id}
              id={node.id}
              image={node.image}
              title={node.title}
              name={node.createdBy.name}
              avatarUrl={node.createdBy.avatarUrl}
              userId={node.createdBy.id}
            />
          ))}
        </section>
      ) : (
        <p className="no-result-text text-center">
          No projects found, go create first
        </p>
      )}
    </section>
  );
}
