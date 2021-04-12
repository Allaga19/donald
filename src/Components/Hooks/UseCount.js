import { useState } from 'react';

export function UseCount() {
   // создадим хук
   const [count, setCount] = useState(1);
    // функция - обработчик события и будет запускать хук setCount
   const onChange = e => setCount(e.target.value);

   return { count, setCount, onChange }
}