export interface ILogolinkProps {
  toPage?: string;
  src?: string;
  alt?: string;
  className?: string;
}

export enum DefaultValues {
  toPage = "/",
  src = "/logo.png",
  alt = "Home Cooks Logotype",
}
