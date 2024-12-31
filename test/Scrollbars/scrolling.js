import { createRoot } from 'react-dom/client';
import { Scrollbars } from 'react-custom-scrollbars-12';
import React from 'react';

export default function createTests(scrollbarWidth, envScrollbarWidth) {
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

  describe('when scrolling', () => {
    describe('when native scrollbars have a width', () => {
      if (!scrollbarWidth) return;
      it('should update thumbs position', (done) => {
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
    });

    it('should not trigger a rerender', () => {
      const root = createRoot(node);

      root.render(
        <Scrollbars style={{ width: 100, height: 100 }}>
          <div style={{ width: 200, height: 200 }} />
        </Scrollbars>,
      );
    });

    describe('when scrolling x-axis', () => {
      it('should call `onScroll`', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScroll={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
      it('should call `onScrollFrame`', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScrollFrame={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
      it('should call `onScrollStart` once', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScrollStart={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
      it('should call `onScrollStop` once when scrolling stops', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScrollStop={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
    });

    describe('when scrolling y-axis', () => {
      it('should call `onScroll`', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScroll={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
      it('should call `onScrollFrame`', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScrollFrame={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
      it('should call `onScrollStart` once', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScrollStart={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
      it('should call `onScrollStop` once when scrolling stops', (done) => {
        const spy = createSpy();
        const root = createRoot(node);

        root.render(
          <Scrollbars style={{ width: 100, height: 100 }} onScrollStop={spy}>
            <div style={{ width: 200, height: 200 }} />
          </Scrollbars>,
        );
      });
    });
  });
}
