import { ProjectInterface } from '@/common.types';
import Categories from '@/components/Categories';
import LoadMore from '@/components/LoadMore';
import ProjectCard from '@/components/ProjectCard';
import { categoryFilters } from '@/constant';
import { projectsQuery } from '@/graphql';
import { client } from '@/lib/actions';

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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home({
  searchParams: { category, cursor },
}: {
  searchParams: {
    category?: string | null;
    cursor?: string | null;
  };
}) {
  const {
    projectSearch: { edges: projects, pageInfo },
  } = (await client.request(projectsQuery, {
    categories: category || categoryFilters,
    cursor: cursor || null,
  })) as ProjectSearch;

  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />

      {projects.length > 0 ? (
        <>
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

          <LoadMore
            startCursor={pageInfo.startCursor}
            endCursor={pageInfo.endCursor}
            hasNextPage={pageInfo.hasNextPage}
            hasPreviousPage={pageInfo.hasPreviousPage}
          />
        </>
      ) : (
        <p className="no-result-text text-center">
          No projects found, go create first
        </p>
      )}
    </section>
  );
}
