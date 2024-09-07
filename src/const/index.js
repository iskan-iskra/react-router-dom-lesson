export const postList = [
  {
    id: 1,
    title: "title - 1",
    description: "descripion - 1",
  },
  {
    id: 2,
    title: "title - 2",
    description: "descripion - 2",
  },
  {
    id: 3,
    title: "title - 3",
    description: "descripion - 3",
  },
  {
    id: 4,
    title: "title - 4",
    description: "descripion - 4",
  },
];

export const postById = (reqId) => postList.find(({ id }) => +reqId === id);
