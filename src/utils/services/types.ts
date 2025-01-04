type Response = {
  success: boolean;
  message: string;
};

export type Success<T = any> = Response & {
  success: true;
} & T;

export type Failed = Response & {
  success: false;
};
