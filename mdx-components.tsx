import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/legacy/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => {
      <Image
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        {...(props as ImageProps)}
      />
    },
    ...components
  }
}
