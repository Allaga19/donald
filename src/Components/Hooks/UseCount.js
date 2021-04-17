import { useState } from 'react';

export function UseCount(startCount) {
   // создадим хук
   const [count, setCount] = useState(startCount || 1);
    // функция - обработчик события и будет запускать хук setCount
   const onChange = e => setCount(e.target.value);

   return { count, setCount, onChange };
}