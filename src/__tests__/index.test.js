import { getPercents } from '../index.js'

describe('tests for getPercents function', () => {
	it('should count percents', () => {
		expect(getPercents(10, 100)).toBe(10)
		expect(getPercents(30, 200)).toBe(60)
		expect(getPercents('qwe', 200)).toBe('Данные не верны')
		expect(getPercents(30, 'asd')).toBe('Данные не верны')
		expect(getPercents(NaN, 1000)).toBe('Данные не верны')
	})
})
