const sizes: { [key in Breakpoint]: string } = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

type Breakpoint = "mobileS" | "mobileM" | "mobileL" | "tablet" | "laptop" | "laptopL" | "desktop";

export const above = (size: Breakpoint): string => {
  return `(min-width: ${sizes[size]})`;
};
