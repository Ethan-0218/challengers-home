import { useEffect, useRef, useState } from 'react';
import { $popupObservable } from './PopupManager.observables';
import { Popup } from './PopupManager.types';
import * as S from './PopupManager.styles';
import { ANIM_DURATION } from './PopupManager.constants';

const Portal = () => {
  const [popup, setPopup] = useState<Popup | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sub = $popupObservable.subscribe((p) => {
      if (!p) {
        if (ref.current) {
          ref.current.style.transition = `all ${ANIM_DURATION}ms ease-in`;
          ref.current.style.opacity = '0';
          ref.current.style.transform = 'translateY(-20px)';
        }
        setTimeout(() => setPopup(null), ANIM_DURATION);
        return;
      }
      setPopup(p);
    });
    return () => sub.unsubscribe();
  }, []);

  if (!popup) return <></>;
  const { Component, ...layout } = popup;
  return (
    <S.Overlay
      onClick={(e) => {
        e.stopPropagation();
        close();
      }}
    >
      <S.Container ref={ref} {...layout}>
        {Component}
      </S.Container>
    </S.Overlay>
  );
};

const show = (popup: Popup) => $popupObservable.next(popup);

const close = () => $popupObservable.next(null);

export default {
  Portal,
  show,
  close,
};
