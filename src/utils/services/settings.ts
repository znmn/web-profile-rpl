type data = {
  success: boolean;
  message: string;
  data: contacts;
};

type contacts = {
  contact: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  github: string;
};

export const getSettings = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/settings");
    const data: data = await res.json();

    const array = Object.entries(data.data!).map(([key, value]) => ({
      key,
      value,
    }));

    return array;
  } catch (error: unknown) {
    console.error(`Terjadi kesalahan : ${error}`);

    return null;
  }
};
