import PrismaClient from 'db';

export default defineEventHandler(async (event) => {
  try {
    const lists = await PrismaClient.list.findFirst({
      where: {
        url: event.context.params.url,
      },
    });
    return lists?.id;
  } catch (error: any) {
    return {
      error,
    };
  }
});
