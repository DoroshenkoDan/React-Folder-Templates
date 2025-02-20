import { AxiosRequestConfig } from 'axios';
import BaseRESTClient from '../../../BaseRESTClient';
import { TResponseError } from '../../types';

/**
 * @function [FTName]
 * @alias [FTName]
 * @see https://github.com/axios/axios
 */

export interface TAPI[FTName] {
  TError: TResponseError;
  TSuccess: {
    data: object;
  };
  TParams: {
    examId: string;
  };
}

export type TError = TAPI[FTName]['TError'];
export type TSuccess = TAPI[FTName]['TSuccess'];
export type TParams = TAPI[FTName]['TParams'];

export async function [FTName](
  this: BaseRESTClient,
  params: TParams,
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const { data } = await this.client.get<TSuccess>(
      `/examination/optic-disk-analyse/${params.examId}`,
      config
    );
    return data;
  } catch (error: any | TError) {
    if (error.data.status === 'Error') throw error.data;
    else
      throw {
        message: error?.message,
        status: error?.response.status,
      };
  }
}