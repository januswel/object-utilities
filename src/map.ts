export type Transformer = (key: string, value?: any, index?: number) => any

export default function map(src: object, transformer: Transformer) {
  return Object.entries(src).reduce((result, [key, value], index) => {
    const [newKey, newValue] = transformer(key, value, index)
    result[newKey] = newValue
    return result
  }, {})
}
