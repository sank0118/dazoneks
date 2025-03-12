# useImperativeHandle

1. ChildComponent 설계

```javascript
import { useImperativeHandle, Ref } from 'react'

interface ChildComponentProps {
    ...
}

export interface ChildRef {
    focus: () => void
    value: string;
    hello: () => void
}

function ChildComponent (props: ChildComponentProps, ref: Ref<ChildRef> ){
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus()
    value: 'child';
    hello: () => console.log('hello this is child')
    }))

    return (<input ref={inputRef} />)
}

import { useRef} from 'react'
import { ChildRef } from './ChildComponent'


function ParentComponent (){
    const childRef = useRef<ChildRef>(null)

    const focusChildInput = () => childRef.current?.focus()

}
```

### custim Hook으로 input select

1. rafce =>return{}

2. 필요한 ref 선언하기

3. Component 등의 이름으로 리액트 컴포넌트 바깥이 아닌 안에 선언 위치 :return {} 위

4. 원하는 ComponentProps 만들면 됨

6.return {ref, Component,...변수,함수}
