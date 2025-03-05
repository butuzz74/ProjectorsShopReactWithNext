import ProjectorCard from '@/components/ProjectorCard';
import projectorService from '../../../../lib/getDataForProjectors';

async function InstalationAllPage() {
  const projectors =
    await projectorService.getProjectorByDescription('инсталяционный');
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectors.map((projector) => (
        <ProjectorCard
          key={projector.id}
          id={projector.id}
          image={projector.image}
          price={projector.price}
          model={projector.model}
          type={projector.type}
          brand={projector.brand}
          access={projector.access}
          description={projector.description}
        />
      ))}
    </div>
  );
}

export default InstalationAllPage;
