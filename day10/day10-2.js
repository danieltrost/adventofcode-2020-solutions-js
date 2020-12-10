exports.findAdapterPermutations = function (values) {
  const adapterTrend = { 0: 1 };
  const maxAdapter = Math.max(...values);
  let currentAdapter = Math.min(...values);

  while (currentAdapter <= maxAdapter) {
    if (!adapterTrend[currentAdapter]) {
      adapterTrend[currentAdapter] = 0;
    }

    if (adapterTrend[currentAdapter - 3]) {
      adapterTrend[currentAdapter] += adapterTrend[currentAdapter - 3];
    }
    if (adapterTrend[currentAdapter - 2]) {
      adapterTrend[currentAdapter] += adapterTrend[currentAdapter - 2];
    }
    if (adapterTrend[currentAdapter - 1]) {
      adapterTrend[currentAdapter] += adapterTrend[currentAdapter - 1];
    }

    if (values.includes(currentAdapter + 1)) {
      currentAdapter += 1;
    } else if (values.includes(currentAdapter + 2)) {
      currentAdapter += 2;
    } else if (values.includes(currentAdapter + 3)) {
      currentAdapter += 3;
    } else {
      currentAdapter += 3;
    }
  }

  return adapterTrend[maxAdapter];
};
