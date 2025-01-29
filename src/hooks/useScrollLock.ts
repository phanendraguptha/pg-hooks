import { useLayoutEffect } from "react";

const useScrollLock = () => {
  useLayoutEffect(() => {
    const originalBodyStyleOverview = window.getComputedStyle(
      document.body
    ).overflow;
    const originalMarginRight = window.getComputedStyle(
      document.body
    ).marginRight;
    const originalMarginRightValue = parseFloat(originalMarginRight);
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.marginRight = `${
      scrollBarWidth - originalMarginRightValue
    }px`;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.marginRight = originalMarginRight;
      document.body.style.overflow = originalBodyStyleOverview;
    };
  }, []);
};

export default useScrollLock;
