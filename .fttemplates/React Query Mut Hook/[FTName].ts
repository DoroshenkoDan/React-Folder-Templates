import {
  useMutation,
  MutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

import { api } from '_api';
import {
  TSuccess,
  TPayload,
  TError,
} from '_api/AltrisRESTClient/routes/[FTName]';

type TParams = {
  examId: string;
};

export type T[FTName]Mut = UseMutationResult<
  TSuccess,
  TError,
  TPayload,
  unknown
>;

export type T[FTName]MutOpt = Omit<
  MutationOptions<TSuccess, TError, TPayload>,
  'mutationKey'
>;

export const get[FTName]MutKey = (params: TParams) => [
  '[FTName]',
  params,
];

export function get[FTName]MutOpts(
  params: TParams,
  options?: T[FTName]MutOpt
) {
  return {
    ...options,
    mutationKey: get[FTName]MutKey(params),
    mutationFn: (variables: TPayload) =>
      api.[FTName](variables),
  };
}

export default function use[FTName]Mut(
  params: TParams,
  options?: T[FTName]MutOpt
) {
  const opts = get[FTName]MutOpts(params, options);
  return useMutation<TSuccess, TError, TPayload>(opts);
}