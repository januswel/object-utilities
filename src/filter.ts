export type Predicate<V> = (key: string, value: V) => boolean

type ValueOf<T> = T[keyof T]

export default function filter<S extends object, V extends ValueOf<S>>(src: S, predicate: Predicate<V>) {
  return Object.entries(src).reduce((result, [key, value]) => {
    if (predicate(key, value)) {
      result[key] = value
    }
    return result
  }, {})
}
