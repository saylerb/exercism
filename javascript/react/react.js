export class InputCell {
  constructor(value) {
    this.value = value;
    this.computeCells = [];
  }

  setValue(value) {
    this.value = value;

    if (this.computeCells.size !== 0) {
      const changedList = this.computeCells.map((computeCell) => {
        const changed = computeCell.updateOutput();

        return changed;
      });

      // Only find callbacks to call if a dependency changed
      if (changedList.some((changed) => changed)) {
        const callbacks = this.findCallbacks(this.computeCells);

        callbacks.forEach((callback) => callback.update());
      }
    }
  }

  findCallbacks(computeCells) {
    const uniqueCallBacks = new Set();

    computeCells.forEach((computeCell) => {
      let current = computeCell;

      // Add any callbacks on the immediately adjacent cells
      current.callbacks.forEach((callback) => uniqueCallBacks.add(callback));

      while (current.computeCell !== null) {
        current.computeCell.callbacks.forEach((callback) => {
          uniqueCallBacks.add(callback);
        });

        current = current.computeCell;
      }
    });

    return uniqueCallBacks;
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
    this.value = this.computeValue();
    this.computeCell = null;

    this.cells.forEach((cell) => {
      cell.register(this);
    });
  }

  register(computeCell) {
    this.computeCell = computeCell;
  }

  computeValue() {
    return this.fn(this.cells);
  }

  updateOutput() {
    const computed = this.computeValue();
    const changed = computed !== this.value && this.value !== undefined;

    this.value = computed;

    if (changed && this.computeCell !== null) {
      this.computeCell.updateOutput();
    }

    return changed;
  }

  addCallback(callback) {
    this.callbacks.add(callback);
    callback.register(this);
  }

  removeCallback(callback) {
    this.callbacks.delete(callback);
  }
}

export class CallbackCell {
  constructor(callbackFn) {
    this.callbackFn = callbackFn;
    this.values = [];
    this.computeCell = null;
    this.previousComputeCellValue = null;
  }

  update() {
    // Only update if the output cell value changed
    if (this.previousComputeCellValue !== this.computeCell.value) {
      const updatedValue = this.computeCell.value;
      this.values.push(updatedValue);

      this.previousComputeCellValue = this.computeCell.value;
    }
  }

  register(computeCell) {
    this.computeCell = computeCell;
    this.previousComputeCellValue = computeCell.value;
  }
}
