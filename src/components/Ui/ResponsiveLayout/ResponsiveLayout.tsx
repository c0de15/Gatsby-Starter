import { useWindowDimensions } from '../../hooks/WindowDimensionsProvider'

const ResponsiveLayout = ({
  breakpoint,
  renderMobile,
  renderDesktop,
}: {
  breakpoint?: number
  renderMobile: any
  renderDesktop: any
}) => {
  const { width } = useWindowDimensions()
  breakpoint = breakpoint ? breakpoint : 767

  return width > breakpoint ? renderDesktop() : renderMobile()
}
export default ResponsiveLayout
