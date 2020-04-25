import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

type Classes = {
  readonly [key: string]: string;
}

export function clsx(classes: Classes): string {
  return Object.entries(classes)
    .reduce((acc, [klass, state]) => {
      return state ? [...acc, klass] : acc;
    }, [] as Array<string>)
    .join(' ');
}

export function getTransitionClasses(styles: Classes, prefix: string): CSSTransitionClassNames {
  return Object.entries(styles).reduce((acc, [key, klass]) => {
    if (key.includes(prefix)) {
      const [,newKey] = key.split('-');
      return { ...acc, [newKey]: klass }
    }
    return acc;
  }, {} as CSSTransitionClassNames);
}