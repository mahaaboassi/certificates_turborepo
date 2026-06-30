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

export type PropsDataFetchingUsers = {
  err: "0" | "1",
  msg: string,
  statusCode: 401 | 403 | 500 | 200 | 404 | 422,
  data: UsersProps[] | []
}

export type UsersProps = {
  createdAt: string,
  createdBy?: {id: number, name: string},
  email: string,
  id: number,
  name: string,
  role: string,
  updatedAt: string,
  updatedBy?: {id: number, name: string},
}

export type PropsDataFetchingCertificates = {
  err: "0" | "1",
  msg: string,
  statusCode: 401 | 403 | 500 | 200 | 404 | 422,
  data: CertificatesProps[] | []
}

export type CertificatesProps = {
  certificateImage: string,
  certificateNo: string,
  description:string,
  expiresAt: string,
  grade: string,
  hours: string,
  createdBy?: {id: number, name: string},
  holderEmail: string,
  id: number,
  holderName: string,
  issuedAt: string,
  updatedAt: string,
  issuedByUser: {id: number, name: string},
  qrImage: string,
  qrToken: string,
  status: string,
  title: string,
  updatedBy?: {id: number, name: string},
  institution?: {id: number, name: string}, 
}

export type PropsDataFetchingInstitutions = {
  err: "0" | "1",
  msg: string,
  statusCode: 401 | 403 | 500 | 200 | 404 | 422,
  data: InstitutionsProps[] | []
}

export type InstitutionsProps = {
  id: number;
  name: string;
  logo: string | null;
  address: string | null;
  website: string | null;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy?: {
    id: number;
    name: string;
  } | null;
  updatedBy?: {
    id: number;
    name: string;
  } | null;
};