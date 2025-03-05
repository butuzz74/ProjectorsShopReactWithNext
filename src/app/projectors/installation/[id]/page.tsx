import NavigationButton from '@/components/Button';
import projectorService from '../../../../../lib/getDataForProjectors';
import ProjectorCardOne from '../../../../components/ProjectorCardOne';

async function ProjectorInstallationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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

export default ProjectorInstallationPage;
