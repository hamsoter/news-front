export const getNews = async (url: string) => {
  const response = await fetch(url);

  if (response.status === 200) {
    return { data: (await response.json()).data, success: true };
  } else {
    return { data: new Error(), success: false };
  }
};
