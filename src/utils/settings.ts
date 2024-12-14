export const getSettings = async () => {
  const res = await fetch("http://localhost:3000/api/admin/settings");

  console.log(res.body);
};
