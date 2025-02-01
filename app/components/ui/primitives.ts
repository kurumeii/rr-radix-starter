import { cva } from 'configs/cva.config'

const focusButtonStyles = cva({
  base: 'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
})

export { focusButtonStyles }
