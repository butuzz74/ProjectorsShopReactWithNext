import NavigationButton from '@/components/Button';
import ProjectorCardOne from '../../../components/ProjectorCardOne';
import projectorService from '../../../../lib/getDataForProjectors';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const projector = await projectorService.getProjectorById(id);
  if (!projector) {
    return {
      title: 'Projector Not Found',
      description: 'Details about this projector are not available.',
    };
  }

  return {
    title: projector.model,
    description: projector.description,
  };
}

async function ProjectorPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const projector = await projectorService.getProjectorById(id);

  return (
    <div className="mx-auto flex h-full max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-lg">
      <ProjectorCardOne
        id={projector?.id!}
        image={projector?.image!}
        price={projector?.price!}
        model={projector?.model!}
        type={projector?.type!}
        brand={projector?.brand!}
        access={projector?.access!}
        description={projector?.description!}
      />
      <NavigationButton text="Назад" back={true} />
    </div>
  );
}

export default ProjectorPage;
