import request from '../axios'

// 获取宝可梦数据
export function getPokemonApi(id: number) {
  return request.get(`pokemon/${id}`)
}