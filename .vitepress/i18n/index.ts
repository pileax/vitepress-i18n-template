import messageEn from './en.json';
import messageZh from './zh.json';

type Indexable<T = any> = {
  [key: string]: T;
};

export const tr = (locale :string, key :string) :string => {
  switch (locale) {
    case 'zh':
      return (messageZh as Indexable)[key] || key;
    default:
      return (messageEn as Indexable)[key] || key ;
  }
}