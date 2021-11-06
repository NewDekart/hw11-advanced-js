const MySet = require('../solution')

describe('Проверка собственного множества', () => {
    it('Хранит только уникальные значения', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        expect([...mySet]).toEqual([...set])
    })

    it('Свойство size присутствует и работает корректно', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        expect(mySet.size).toBe(set.size)
    })

    it('Работает в цикле for-of', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        const arrayFromMySet = []
        const arrayFromNativeSet = []

        for (const item of mySet) {
            arrayFromMySet.push(item)
        }

        for (const item of set) {
            arrayFromNativeSet.push(item)
        }

        expect(arrayFromMySet).toEqual(arrayFromNativeSet)
    })

    it('Реализован и корректно работает метод keys', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        const arrayFromMySet = []
        const arrayFromNativeSet = []

        for (const item of mySet.keys()) {
            arrayFromMySet.push(item)
        }

        for (const item of set.keys()) {
            arrayFromNativeSet.push(item)
        }

        expect(arrayFromMySet).toEqual(arrayFromNativeSet)
    })

    it('Реализован и корректно работает метод values', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        const arrayFromMySet = []
        const arrayFromNativeSet = []

        for (const item of mySet.values()) {
            arrayFromMySet.push(item)
        }

        for (const item of set.values()) {
            arrayFromNativeSet.push(item)
        }

        expect(arrayFromMySet).toEqual(arrayFromNativeSet)
    })

    it('Реализован и корректно работает метод entries', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        const arrayFromMySet = []
        const arrayFromNativeSet = []

        for (const item of mySet.entries()) {
            arrayFromMySet.push(item)
        }

        for (const item of set.entries()) {
            arrayFromNativeSet.push(item)
        }

        expect(arrayFromMySet).toEqual(arrayFromNativeSet)
    })

    it('Реализован и корректно работает метод clear', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        mySet.clear()
        set.clear()

        expect(mySet.size).toBe(set.size)
    })

    it('Реализован и корректно работает метод add', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        const object = {
            getValue () { return this.value }
        }

        const data = {
            value: 42
        }

        set.add(object);
        set.add(data);

        mySet.add(object);
        mySet.add(data)

        expect([...mySet]).toEqual([...set])
    })

    it('Метод add корректо работает в цепочке вызовов', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        const object = {
            getValue () { return this.value }
        }

        mySet.add(object).add(object).add(object).add('тест');
        set.add(object).add(object).add(object).add('тест');

        expect([...mySet]).toEqual([...set])
    })

    it('Реализован и корректно работает метод delete', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        mySet.delete(8)
        set.delete(8)

        expect([...mySet]).toEqual([...set])
    })

    it('Реализован и корректно работает метод has', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const set = new Set([4, 8, 15, 15, 16, 23, 42]);

        expect(mySet.has({})).toBe(set.has({}))
        expect(mySet.has(15)).toBe(set.has(15))
        expect(mySet.has(84)).toBe(set.has(84))
    })

    it('Корректно работает valueOf', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);

        expect(mySet === mySet.valueOf()).toBeTruthy()
    })

    it('Корректно работает преобразование к строке', () => {
        const mySet = new MySet([4, 8, 15, 15, 16, 23, 42]);

        expect(String(mySet)).toBe('[object ^_^]')
        expect(Object.prototype.toString.call(mySet)).toBe('[object ^_^]')
    })

    it('Реализована и корректно работает функция forEach', () => {
        const mySet = new MySet([4, 8]);

        const data = {
            value: 42
        }

        const mySetForEachResult = []
        const dataForEachResult = []

        const mySetFunc = (item) => {mySetForEachResult.push(item)}
        const dataFunc = function (item) {dataForEachResult.push(this.value)}
        mySet.forEach(mySetFunc)
        mySet.forEach(dataFunc, data)

        expect(mySetForEachResult).toEqual([4, 8])
        expect(dataForEachResult).toEqual([42, 42])
    })
})
