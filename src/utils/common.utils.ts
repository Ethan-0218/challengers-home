export const getFaviconUrl = (url: string) => {
  const { origin } = new URL(url);

  return [
    `${origin}/favicon.ico`,
    `http://www.google.com/s2/favicons?domain=${origin}`,
  ];
};
