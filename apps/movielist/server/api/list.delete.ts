import PrismaClient from 'db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const deleted = await PrismaClient.list.deleteMany({
    where: {
      id: body.id,
    },
  });
  console.log(deleted);
  return 200;
});
