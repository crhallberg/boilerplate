const metrics = {
  6: 0.043,
  7: 0.032,
  8: 0.024,
  9: 0.016,
  10: 0.01,
  11: 0.005,
  12: 0,
  13: -0.0025,
  14: -0.006,
  15: -0.009,
  16: -0.011,
  17: -0.013,
  18: -0.014,
  20: -0.017,
  24: -0.019,
  30: -0.021,
  40: -0.022,
  80: -0.022,
};

const round = (num, pre = 3) => Math.round(num * 10 ** 3) / 10 ** 3;

function getCalc(minWidth, minValue, maxWidth, maxValue, unit = "px") {
  const delta = (maxValue - minValue) / (maxWidth - minWidth);
  const base = minValue - delta * minWidth;

  console.log(`from ${base + delta * minWidth} to ${base + delta * maxWidth}`);

  const vw = delta * (unit == "rem" ? 16 : unit == "mm" ? 960 / 2.54 : 1) * 100;

  if (minValue > maxValue) {
    return {
      base,
      vw,
      min: maxValue,
      max: minValue,
    };
  }

  return {
    base,
    vw,
    min: minValue,
    max: maxValue,
  };
}

function letterSpacing(minWidth, minSize, maxWidth, maxSize) {
  const minValue =
    minSize *
    Object.entries(metrics).reduce(
      (min, [px, em]) => (px > minSize ? min : em),
      0
    );
  const maxValue =
    maxSize *
    Object.entries(metrics).reduce(
      (max, [px, em]) => (px > maxSize ? max : em),
      0
    );

  return getCalc(minWidth, minValue, maxWidth, maxValue);
}

const steps = {
  "-1": [13.33, 14.14],
  0: [16.0, 20.0],
  1: [19.2, 28.28],
  2: [23.04, 39.99],
  3: [27.65, 56.54],
  4: [33.18, 79.95],
};

const unit = "px";

for (let step in steps) {
  const [minSize, maxSize] = steps[step];
  const { min, base, vw, max } = letterSpacing(
    480,
    minSize,
    1280,
    maxSize,
    unit
  );

  console.log(
    `--letter-spacing-${step}: clamp(${round(min)}${unit}, calc(${round(
      base
    )}${unit} + ${round(vw)}vw), ${round(max)}${unit});`
  );
}
