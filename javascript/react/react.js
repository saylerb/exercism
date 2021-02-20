export class InputCell {
  constructor(value) {
    this.value = value;
    this.computeCells = [];
  }

  setValue(value) {
    this.value = value;

    if (this.computeCells.size !== 0) {
      this.computeCells.forEach((computeCell) => computeCell.updateOutput());
    }
  }

  register(computeCell) {
    this.computeCells.push(computeCell);
  }
}

export class ComputeCell {
  constructor(cells, fn) {
    this.cells = cells;
    this.fn = fn;
    this.callbacks = new Set();
    this.output = this.updateOutput();
    this.computeCell = null;

    this.cells.forEach((cell) => {
      cell.register(this);
    });
  }

  register(computeCell) {
    this.computeCell = computeCell;
  }

  updateOutput() {
    const computed = this.fn(this.cells);
    const changed = computed !== this.output && this.output !== undefined;

    if (changed) {
      this.callbacks.forEach((callback) => callback.update(computed));
    }

    this.output = computed;

    if (changed && this.computeCell !== null) {
      this.computeCell.updateOutput();
    }

    return this.output;
  }

  get value() {
    return this.output;
  }

  addCallback(callback) {
    this.callbacks.add(callback);
  }

  removeCallback(callback) {
    this.callbacks.delete(callback);
  }
}

export class CallbackCell {
  constructor(callbackFn) {
    this.callbackFn = callbackFn;
    this.values = [];
  }

  update(computed) {
    this.values.push(computed);
  }
}
