import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wcl-button',
  styleUrl: 'wcl-button.css',
  shadow: true,
})
export class WclButton {

  @Prop() buttonText: string;

  render() {
    return (
      <Host>
        <button>{this.buttonText}</button>
      </Host>
    );
  }
}
