import PrismaClient from 'db';

export default defineEventHandler(async (event) => {
  const lists = await PrismaClient.list.findFirst({
    where: {
      url: event.context.params.url,
    },
  });
  return lists;
});
