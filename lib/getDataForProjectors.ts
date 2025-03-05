import { prisma } from './prisma';

const projectorService = {
  getProjectorsAll: async () => {
    const projectors = await prisma.projector.findMany();
    return projectors;
  },
  getProjectorById: async (id: string) => {
    const projector = await prisma.projector.findUnique({
      where: {
        id: id,
      },
    });
    return projector;
  },
  getProjectorByDescription: async (description: string) => {
    const projector = await prisma.projector.findMany({
      where: {
        description: { contains: description },
      },
    });
    return projector;
  },
  getProjectorByType: async (type: string) => {
    const projector = await prisma.projector.findMany({
      where: {
        type: type,
      },
    });
    return projector;
  },
};

export default projectorService;
