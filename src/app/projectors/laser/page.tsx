import projectorService from '../../../../lib/getDataForProjectors';
import ProjectorCard from '@/components/ProjectorCard';

async function LaserAll() {
  const projectors = await projectorService.getProjectorByType('Laser');
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

export default LaserAll;
