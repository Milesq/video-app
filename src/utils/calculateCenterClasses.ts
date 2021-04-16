export type CenterProps = Partial<{
  x: boolean
  y: boolean
  columns: boolean
}>

export default ({ columns, x, y }: CenterProps = {}): string[] => {
  const additionalClasses: string[] = []
  const axes = {
    x: 'justify-content-center',
    y: 'align-items-center',
  }
  let axesReverted = false

  if (columns) {
    axesReverted = true
    additionalClasses.push('flex-column')
  }

  if (x) {
    additionalClasses.push(axesReverted ? axes.y : axes.x)
  }

  if (y) {
    additionalClasses.push(axesReverted ? axes.x : axes.y)
  }

  return additionalClasses
}
