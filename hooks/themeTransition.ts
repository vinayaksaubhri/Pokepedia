import { Platform } from "react-native";

/** Circle reveal length (matches `await wait(duration)` after `withTiming`). */
export const THEME_REVEAL_DURATION_MS = 650;

const ANDROID_FREEZE_FRAMES_AFTER_OVERLAY1 = 4;
const IOS_FREEZE_FRAMES_AFTER_OVERLAY1 = 2;

const ANDROID_SETTLE_FRAMES_BEFORE_SNAPSHOT2 = 3;
const ANDROID_SETTLE_MS_BEFORE_SNAPSHOT2 = 32;
const IOS_SETTLE_MS_BEFORE_SNAPSHOT2 = 16;

export const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export const waitForNextFrame = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

/**
 * After we set `overlay1`, React + Skia must actually draw that bitmap on screen
 * before we change real colors with `setIsDarkMode`. Otherwise Android can show
 * the new theme for a frame (flash), then the animation.
 */
export const waitForOverlayPaint = async () => {
  const frames =
    Platform.OS === "android"
      ? ANDROID_FREEZE_FRAMES_AFTER_OVERLAY1
      : IOS_FREEZE_FRAMES_AFTER_OVERLAY1;
  for (let i = 0; i < frames; i += 1) {
    await waitForNextFrame();
  }
};

/**
 * After the theme flips, layout (TextInput, etc.) needs a moment before the
 * second screenshot matches what the user will see when the animation ends.
 */
export const settleBeforeSecondCapture = async () => {
  if (Platform.OS === "android") {
    for (let i = 0; i < ANDROID_SETTLE_FRAMES_BEFORE_SNAPSHOT2; i += 1) {
      await waitForNextFrame();
    }
    await wait(ANDROID_SETTLE_MS_BEFORE_SNAPSHOT2);
  } else {
    await wait(IOS_SETTLE_MS_BEFORE_SNAPSHOT2);
  }
};
