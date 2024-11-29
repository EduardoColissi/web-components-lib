import { newSpecPage } from '@stencil/core/testing';
import { WclButton } from '../wcl-button';

describe('wcl-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WclButton],
      html: `<wcl-button></wcl-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wcl-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcl-button>
    `);
  });
});
