export type RouteProps = {
  name: string;
  key: string;
  link: string;
  icon?: React.ElementType;
};

export type RoutesProps = {
  name: string;
  key: string;
  link: string;
  icon?: React.ElementType;
  children?: RouteProps[];
};
export type ApiProps = {
  url :string,
  isFetchFresh?: boolean | false,
  originUrl: string,
  params?: any,
  headers?: any,
  body?: any,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
}