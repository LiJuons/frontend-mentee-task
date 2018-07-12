import { NAME } from './constants';

export const getServers = state => state[NAME].servers;
export const isFetching = state => state[NAME].isFetching;
export const getError = state => state[NAME].error;
