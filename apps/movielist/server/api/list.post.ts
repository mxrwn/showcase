import PrismaClient from 'db';

export default defineEventHandler(async () => {
  const url = (Math.random() + 1).toString(36).substring(7);
  const list = await PrismaClient.list.create({
    data: {
      url,
      title: 'New Title',
    },
  });
  return {
    url: list.url,
    title: list.title,
    id: list.id,
  };
});
