import request from './request'
import { baseUrl } from '@/utils'

export const logIn = params => request(params, `${baseUrl}/user/logIn`)
