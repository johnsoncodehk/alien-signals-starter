import { signal, computed, effect } from './index';

const count = signal(1);
const doubleCount = computed(() => count.get() * 2);

effect(() => {
	console.log(`Count is: ${count.get()}`);
}); // Console: Count is: 1

console.log(doubleCount.get()); // 2

count.set(2); // Console: Count is: 2

console.log(doubleCount.get()); // 4
