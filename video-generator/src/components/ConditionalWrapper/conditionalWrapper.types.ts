export type ConditionalWrapperProps = {
  children: React.ReactNode
  condition: boolean
  wrapper: (child: React.ReactNode) => React.ReactNode
}