declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

// Image Files
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
