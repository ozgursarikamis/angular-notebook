export abstract class BaseComponent {
  title: string;
  protected constructor() {
    this.title = 'base component title';
  }

  getTranslateKey(): string {
    return '';
  }
}
