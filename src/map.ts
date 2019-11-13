export type Mapper<V, R> = (key: string, value: V) => R

type ValueOf<T> = T[keyof T]

export default function map<S extends object, V extends ValueOf<S>, R>(src: S, mapper: Mapper<V, R>) {
  return Object.entries(src).reduce((result, [key, value]) => {
    result[key] = mapper(key, value)
    return result
  }, {})
}
