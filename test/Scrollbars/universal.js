import {
  createRoot,
  createRoot,
  createRoot,
  createRoot,
  createRoot,
} from 'react-dom/client';
import { Scrollbars } from 'react-custom-scrollbars-12';
import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';

export default function createTests(scrollbarWidth) {
  let node;
  beforeEach(() => {
    node = document.createElement('div');
    document.body.appendChild(node);
  });
  afterEach(() => {
    const root = createRoot(node);
    root.unmount();
    document.body.removeChild(node);
  });

  describe('universal', () => {
    describe('default', () => {
      describe('when rendered', () => {
        it('should hide overflow', (done) => {
          class ScrollbarsTest extends Scrollbars {
            // Override componentDidMount, so we can check, how the markup
            // looks like on the first rendering
            componentDidMount() {}
          }
          const root = createRoot(node);

          root.render(
            <ScrollbarsTest universal style={{ width: 100, height: 100 }}>
              <div style={{ width: 200, height: 200 }} />
            </ScrollbarsTest>,
          );
        });
      });
      describe('when componentDidMount', () => {
        it('should rerender', (done) => {
          const root = createRoot(node);

          root.render(
            <Scrollbars universal style={{ width: 100, height: 100 }}>
              <div style={{ width: 200, height: 200 }} />
            </Scrollbars>,
          );
        });
      });
    });
    describe('when using autoHeight', () => {
      describe('when rendered', () => {
        it('should hide overflow', (done) => {
          class ScrollbarsTest extends Scrollbars {
            // Override componentDidMount, so we can check, how the markup
            // looks like on the first rendering
            componentDidMount() {}
          }
          const root = createRoot(node);

          root.render(
            <ScrollbarsTest universal autoHeight autoHeightMax={100}>
              <div style={{ width: 200, height: 200 }} />
            </ScrollbarsTest>,
          );
        });
      });
      describe('when componentDidMount', () => {
        it('should rerender', (done) => {
          const root = createRoot(node);

          root.render(
            <Scrollbars universal autoHeight autoHeightMax={100}>
              <div style={{ width: 200, height: 200 }} />
            </Scrollbars>,
          );
        });
      });
    });
  });
}
