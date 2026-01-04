// Source - https://stackoverflow.com/a
// Posted by Saeed Rohani, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-04, License - CC BY-SA 4.0
// This wrapper component ensures that all newly navigated-to pages start at the top of the page,
// rather than retaining the scroll position of the previous page.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
