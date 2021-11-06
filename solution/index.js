module.exports = class {
  constructor(initValue) {
    this.order = [];

    for (const val of initValue) {
      this.add(val);
    }
  }

  add(value) {
    if (this.order.indexOf(value) === -1) {
      this.order.push(value);
    }

    return this;
  }

  has(value) {
    return this.order.indexOf(value) !== -1;
  }

  get size() {
    return this.order.length;
  }

  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        const result = {
          value: this.order[index],
          done: index >= this.size,
        };

        index += 1;

        return result;
      },
    };
  }

  keys() {
    return this.order.values();
  }

  values() {
    return this.order.values();
  }

  *entries() {
    const order = this.order;

    for (const value of order) {
      yield [value, value];
    }
  }

  clear() {
    this.order = [];
  }

  delete(value) {
    const index = this.order.indexOf(value);

    this.order = this.order.slice(0, index).concat(this.order.slice(index + 1));
  }

  get [Symbol.toStringTag]() {
    return "^_^";
  }

  forEach(func, context = this) {
    for (const value of this) {
      func.bind(context)(value);
    }
  }
};
