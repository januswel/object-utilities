export type Filterer<V> = (key: string, value: V) => boolean

type ValueOf<T> = T[keyof T]

export default function filter<S extends object, V extends ValueOf<S>>(src: S, filterer: Filterer<V>) {
  return Object.entries(src).reduce((result, [key, value]) => {
    if (filterer(key, value)) {
      result[key] = value
    }
    return result
  }, {})
}
