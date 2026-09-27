'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import styles from './Loader.module.css';

/** Set by the language switcher so a locale change never replays the splash. */
const SWITCH_FLAG = 'bloo-lang-switch';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * First-paint brand splash.
 *
 * Rendered from the locale layout, which the App Router mounts once per full
 * document load and keeps alive across client-side navigation. So it plays on
 * arrival and on hard refresh, and never on a normal link click.
 *
 * A locale change remounts the layout, so the switcher sets a one-shot flag
 * that this consumes to skip the splash — switching language must not flash a
 * loading screen. The flag is read in a layout effect, so the splash is
 * unmounted before the browser can paint it: no flash, no visible reload.
 *
 * The unmount goes through state rather than `node.remove()`. This component
 * lives in the same layout subtree as HtmlLangSetter, which is what corrects
 * `<html lang>`/`dir` on a soft locale change. Detaching a React-owned node
 * behind React's back corrupts its view of the tree, and the resulting broken
 * commit takes the sibling effects down with it: the locale switch would
 * navigate correctly but leave the document claiming the old language. React
 * must own every node it renders.
 *
 * Dismissal is otherwise CSS-first: the overlay animates to `visibility: hidden`
 * on its own, so it cannot survive a failed or blocked client bundle, and it
 * sets `pointer-events: none` so it never swallows input even while visible.
 */
export function Loader() {
  const [suppressed, setSuppressed] = useState(false);

  useIsomorphicLayoutEffect(() => {
    let isLanguageSwitch = false;
    try {
      isLanguageSwitch = sessionStorage.getItem(SWITCH_FLAG) === '1';
      if (isLanguageSwitch) sessionStorage.removeItem(SWITCH_FLAG);
    } catch {
      // storage blocked; fall through to showing the splash
    }
    if (isLanguageSwitch) {
      // sessionStorage is an external store, so reading it and reflecting the
      // result in state is the intended pattern here, not a derived value.
      setSuppressed(true);
    }
  }, []);

  if (suppressed) return null;

  return (
    <div
      className={`${styles.overlay} brand-splash`}
      aria-hidden="true"
      data-testid="brand-splash"
    >
      <div className={styles.loader}>
        <div className={`${styles.box} ${styles.box0}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box1}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box5}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
          <div />
        </div>
        <div className={`${styles.box} ${styles.box7}`}>
          <div />
        </div>
        <div className={styles.ground}>
          <div />
        </div>
      </div>
    </div>
  );
}
