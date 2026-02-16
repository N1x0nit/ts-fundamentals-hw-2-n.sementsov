declare module "simplelightbox" {}
declare module "simplelightbox" {
  export interface SimpleLightboxOptions {
    captions?: boolean;
    captionsData?: 'alt' | 'title' | 'data-title';
    captionDelay?: number;
  }

  export default class SimpleLightbox {
    constructor(selector: string, options?: SimpleLightboxOptions);
    refresh(): void;
    destroy(): void;
  }
}