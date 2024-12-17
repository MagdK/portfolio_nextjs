import type { MDXComponents } from 'mdx/types'
import React from 'react';
import Image, { ImageProps } from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        width={1000}
        height={1000}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain"
        }}
        {...(props as ImageProps)}
      />),
    ...components
  };
}
