import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import { api } from '_api';
import { TSuccess, TParams } from '_api/AltrisRESTClient/routes/[FTName]';

export type T[FTName]Query = UseQueryResult<TSuccess>;

export type T[FTName]Opts = Omit<
  DefinedInitialDataOptions<TSuccess>,
  'queryKey' | 'initialData'
>;

export const get[FTName]Key = (params: TParams) => [
  '[FTName]',
  params,
];

export default function use[FTName]Query(
  params: TParams,
  options?: T[FTName]Opts
) {
  const opts = get[FTName]Opts(params, options);
  return useQuery<TSuccess>(opts);
}

export function get[FTName]Opts(
  params: TParams,
  options?: T[FTName]Opts
): UndefinedInitialDataOptions<TSuccess> {
  return {
    ...options,
    queryKey: get[FTName]Key(params),
    queryFn: ({ signal }) => api.[FTName](params, { signal }),
    enabled: Boolean(options?.enabled ?? params.examId),
  };
}