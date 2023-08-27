export interface ResponseWrapper<T> {
  errors: any;
  data: T[];
  paging: PagingInfo;
}

export interface PagingInfo {
  count: number;
  totalPages: number;
  page: number;
  size: number;
}
