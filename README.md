# alien-signals-starter

Use the `createReactiveSystem` API to build a simple signal library.

## Usage

```ts
import { signal, computed, effect } from 'alien-signals-starter';

const count = signal(1);
const doubleCount = computed(() => count.get() * 2);

effect(() => {
  console.log(`Count is: ${count.get()}`);
}); // Console: Count is: 1

console.log(doubleCount.get()); // 2

count.set(2); // Console: Count is: 2

console.log(doubleCount.get()); // 4
```
