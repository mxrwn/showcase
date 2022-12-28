import PrismaClient from 'db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await PrismaClient.movie.delete({
    where: {
      id: body.id,
    },
  });
  return 200;
});
