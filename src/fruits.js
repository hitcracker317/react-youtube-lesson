export const initialFruits = [
  'バナナ',
  'りんご',
  'みかん',
  'なし',
  'ぶどう',
]

export const getFruits = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialFruits)
    }, 1000)
  })
}