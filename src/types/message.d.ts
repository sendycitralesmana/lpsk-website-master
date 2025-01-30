export type TMessage = {
    navigation: TNavigation[];
    applicationInternal: TApplication[];
  };

export type TNavigation = {
  name: string;
  path: string;
  children?: TNavigation[];
};

declare module "next-intl" {
    export function useMessages(): TMessage;
  }
  