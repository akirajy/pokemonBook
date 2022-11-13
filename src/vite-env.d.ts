/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 宝可梦
interface IPokemon {
  abilities: IAbility[],
  id: number,
  name: string,
  species: ISpecie,
  sprites: ISprite,
  stats: IStats[],
  types: ITypeSlot[]
  height: number,
  weight: number
}

// 种族
interface IType {
  name: string,
  url: string
}

// 种族 + slot
interface ITypeSlot {
  slot: number,
  type: IType
}

// 宝可梦进化链
interface ISpecie {
  name: string,
  url: string
}

// 一些宝可梦图片
interface ISprite {
  back_default: string,
  back_female: null,
  back_shiny: string,
  back_shiny_female: null,
  front_default: string,
  front_female: null,
  front_shiny: string,
  front_shiny_female: null
}

// 宝可梦能力值介绍
interface IStat {
  name: string,
  url: string
}

// 宝可梦的某项能力值
interface IStats {
  base_stat: number,
  effort: number,
  stat: IStat
}

// 宝可梦被动
interface IAbility {
  ability: IAbilityInfo,
  is_hidden: boolean,
  slot: number
}

interface IAbilityInfo {
  name: string,
  url: string
}

interface IAbilityProcessed {
  name: string,
  description: string
  sameAbilityPokemons: any[]
}

interface IAbilityPokemon {
  name: string,
  url: string
}
