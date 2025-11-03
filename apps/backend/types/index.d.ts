export namespace API {
  export type Result<T> = {
    code: number;
    total: number;
    rows: T;
    msg: string;
    success: boolean;
  };

  export type PageInfoRes<T> = Omit<Result<T>, 'rows'> & {
    total: number;
    rows: T[];
  };
  export type PageInfoReq<T> = {
    [P in keyof T]: T[P];
  } & {
    current?: number;
    pageSize?: number;
  };
}

export interface ISelect {
  label: string;
  value: string;
}

