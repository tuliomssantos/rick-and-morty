export interface INumberfy {
  (value: string | string[] | undefined, defaultValue: number): number
}

export const numberfy: INumberfy = (value, defaultValue) => {
  if (value) {
    return Number(value)
  }

  return defaultValue
}
