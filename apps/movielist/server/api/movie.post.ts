import PrismaClient from 'db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const movie = await PrismaClient.movie.create({
    data: {
      title: body.title,
      image: body.image,
      list: {
        connect: {
          id: body.list_id,
        },
      },
    },
  });
  return {
    image: movie.image,
    title: movie.title,
    id: movie.id,
  };
});
