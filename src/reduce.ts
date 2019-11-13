type Reducer<A, V> = (accumulator: A, key: string, value: V) => A

type ValueOf<T> = T[keyof T]

export default function reduce<S extends object, V extends ValueOf<S>, A>(
  src: S,
  reducer: Reducer<A, V>,
  accumulator: A,
) {
  return Object.entries(src).reduce((result, [key, value]) => reducer(accumulator, key, value), accumulator)
}
