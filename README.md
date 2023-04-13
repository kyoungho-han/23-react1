# 202130134 한경호

---

## 4/13 7주차

## Hook

* Hook이란? 
    * 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트한다
    * 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드도 실행 불가했으나 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하기 위해 추가된 기능이 바로 훅(Hook) 이다.
    * Hook : state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수
    * Hook의 이름은 모두 'use'로 시작

## useState 
* 함수형 컴포넌트에서 state를 사용하기 위한 Hook
* 사용법 : const [변수명, set함수명]  = useState(초깃값);
```js
    import React, {useState} from "react";

    function Counter(props) {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>총 {count}번 클릭했습니다. </p>
                <button onClick{() => setCount(count + 1)}>
                    클릭
                </button>
            </div>
        );
    }
```

## useEffect
* useState와 함께 가장 많이 사용하는 Hook
* 사이드 이펙트를 수행하기 위한 것
* 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문이다
* 렌더링이 끝난 이후에 실행되어야 하는 작업들
* 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능 제공
* 사용법 : useEffect(이펙트 함수, 의존성 배열);
    

```js
    import React, {useState, useEffect} from "react";

    function Counter(props) {
        const [count, setCount] = useState(0);

        useEffect(() => { 
            document.title = '총 ${count}번 클릭했습니다.';    
        })

        return (
            <div>
                <p>총 {count}번 클릭했습니다. </p>
                <button onClick{() => setCount(count + 1)}>
                    클릭
                </button>
            </div>
        );
    }
```

* 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행된다
* 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행
* 만약 이펙트 함수가 마운트와 언마운트 될 때만 한번씩 실행되게 하고 싶으면 빈 배열을 넣으면된다
* useEffect()에서 리턴하는 함수는 컴포넌트가 마운트 해제될 때 호출된다

## useMemo
* useMemo() 훅은 Memoizde value를 리턴하는 훅
* 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있다
* 이 훅은 렌더링이 일어나는 동안 실행된다
* 따라서 렌더링이 일어나는 동안 실행되어서는 안될 작업을 넣으면 안된다
```js
    const memoizedValue = useMemo(
        () => {
            return computeExpensiveValue(의존성 변수1. 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    );
```

## useCallback 
* useCallback() 훅은 useMemo()와 유사한 역할
* 차이점은 값이 아닌 함수를 반환
* 의존성 배열을 피마리터로 받는 것은 useMemo 와 동일
* 피라미터로 받은 함수를 콜백이라 부름
* useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환
```js
    const memoizedValue = useCallback(
        () => {
            doSomething(의존성 변수1. 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    );
```
## useRef
* useRef() 훅은 레퍼런스를 사용하기 위한 훅이다
* 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
* useRef() 훅은 바로 이 레퍼런스 객체를 반환
* 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미
```js
const refContainer = useRef(초깃값);
```

## 훅의 규칙
1. 무조건 최상위 레벨에서만 호출해야 한다는 것
    * 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출 불가
    * 컴포넌트가 렌더링 될때마다 같은 순서로 호출되어야 함
2. 리액트 함수 컴포넌트에서만 훅을 호출해야 함
    * 일반 자바스크립트 함수에서 훅을 호출하면 안됨
    * 훅은 리액트 함수 컴포넌트 or 직접 만든 커스텀 훅에서만 호출 가능

## 커스텀 훅
* 리액트에서 기본적으로 제공되는 훅을 이외에 추가적으로 필요한 기능이 있다면 직접 훅을 만들어서 사용할 수 있다

### 커스텀 훅 추출
* 두 개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수를 하나 만드는 방법을 사용
* 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있다
* 이름을 use로 시작하고, 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 됨

---

## 4/6 6주차

### 컴포넌트 추출
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든다는 것
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 도 있다
* Comment 컴포넌트가 UserInfo 컴포넌트를 포함하고 있고, UserInfo 컴포넌트가 Avatar 컴포넌트를 포함하고 있는 구조. 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음

* <img src="img/component 구조.png" width="250px" height="200px">


## State

* State 의미 
    * State는 리액트 컴포넌트의 상태를 의미
    * 상태의 의미는 정상인지 비정상인지가 아닌 컴포넌트의 데이터를 의미
    * 정확히는 컴포넌트의 변경가능한 데이터를 의미
    * State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 함

* State 특징
    * 리액트만의 특별한 형태가 아닌 JavaScript 객체임
    * 함수형에서는 userState()라는 함수 사용
    * state를 변경하고자 할때는 setState() 함수를 사용

## 생명주기

* 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것
* constructor가 실행되면서 컴포넌트가 생성
* 컴포넌트가 소멸하기 전까지 여러번 렌더링함
* 렌더링은 props, setState(), forceUpdate() 에 의해 상태가 변경되면 이루어짐
* 컴포넌트 생성 - componentDidMount() - 렌더링 끝 - componentDidUpdate() - 컴포넌트 언마운트 - componentWillUnmount()
<img src="img/생명주기.png">

---

## 3/30 5주차

## Element
* Element의 정의
    * 리액트 앱을 구성하는 요소를 의미한다
    * 리액트 앱의 가장 작은 빌딩 블록들
* Element의 생김새
    * 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재한다
    * 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 js 객체이다
    * 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있다
    * 버튼을 나타내기 위한 Element ex)
    ```js
    {
        type : 'button',
        props : {
            className : 'bg-green' , 
            children : {
                type : 'b',
                props: {
                    children : 'Hello, element!'
                }
            }
        }
    }
    ```
* Element의 특징
    * 한 번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없다
    * 화면에 변경된 엘리먼트들을 보여주기 위해선 새로운 엘리먼트를 만들어야한다
    * Virtual DOM 개념도
    <img src="img/Virtual DOM 개념도.gif">

### 엘리먼트 렌더링

```js
<div id="root"></div> 
```
* 위 HTML 코드는 root 라는 id를 가진 div 태그이다
* 실제로 이 div 태그 안에 리액트 엘리먼트들이 렌더링되며, 이것을 Root DOM node라고 부른다

### 렌더링된 엘리먼트 업데이트하기

* 새로운 엘리먼트를 생성해서 바꿔치기하는 것

### 기본 CDN + 바벨 CDN 사용하기

* 아래 코드를 head태그 안에 작성
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src=" https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
* 아래 코드를 body태그 안에 작성
```html
<script type="text/babel">
```

## 리액트 컴포넌트
* 리액트는 컴포넌트 기반의 구조와 같다
*  작은 컴포넌트들이 모여서 하나의 컴포넌트를 구성하고 이러한 컴포넌트들이 모여서 전체 페이지를 구성한 것

### PROPS
* props는 prop(property: 속성, 특성)의 줄임말
* 이 props가 컴포넌트의 속성이다
* 컴포넌트에 어떤 속성, props를 넣느냐에 따라 속성이 다른 엘리먼트가 출력
* props는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체이다
* props는 읽기 전용이며 변경할 수 없다

### PROPS 사용법
* JSX에서는 key-value쌍으로 props 구성
```js
function App() {
    return (
        <Profile
            name = "소플"
            introduction = "안녕하세요, 소플입니다."
            viewCount = {1500}
            />
    );
}
```
1. 위의 코드는 App 컴포넌트에서 props를 인자로 받음
2. 내부의 profile 컴포넌트로 전달해서 name, introduction. viewCount에 각각 세가지 속성을 넣음
3. 이렇게 하면 이 속성의 값이 모두 Profile 컴포넌트에 props로 전달되며 props는 아래와 같은 형태의 자바스크립트 객체가 됨

```js
{
    name = "소플"
    introduction = "안녕하세요, 소플입니다."
    viewCount = {1500}
}
```

### PURE 함수 / IMPURE 함수
* pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
* impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수

### 컴포넌트 종류
* 함수형 컴포넌트
```js
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>
}
```
* 클래스형 컴포넌트
```js
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}
```
* 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용
* 이후 Hook이라는 개념이 나오면서 함수형 컴포넌트를 주로 사용

### 컴포넌트 합성
* 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것


---

## 3/23 4주차

## React 프로젝트 생성 및 깃 연동하기

1. React 프로젝트 생성하기
```
1. npx create-react-app 23-React1
2. npm start
```

2. Git 연동하기

```
1. git init
2. 본인의 깃허브 계정에 들어가서 연동할 repository 만들기
3. git remote add origin 만들어진 주소
```

3. 깃허브에 작성한 코드를 레퍼지토리에 푸쉬하면 완성


## JSX 

* 자바스크립트의 모든 기능이 포함된 자바스크립트의 확장 문법
* Javascript와 XML/HTML을 합친 것
```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

```


### JSX의 역할

* JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환한다.
* 이 역할을 하는 함수가 createElement()라는 함수이다.

### JSX의 장점

* 코드가 간결해진다.
* 가독성이 향상된다
* Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강하다

### JSX의 사용법

* 모든 자바스크립트 문법을 지원한다
* 자바스크립트 문법에 XML과 HTML을 섞어서 사용한다
---

## 3/16 3주차

## React 

* 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
* 하나의 프로그램을 만드는 툴, 렌더링 툴
* 복잡한 사이트를 쉽고 빠르게 만들기 위한 툴

    ### React 장점

    1. 빠른 업데이트와 렌더링 속도
        * 빠른 업데이트를 위해 virtual DOM을 사용
    2. 컴포넌트 기반 구조
        * PascalCase : 앞에 문자부터 대문자 ex) UpperCase
        * CamelCase : 중간 문자부터 대문자 ex) upperCase
        * 에어비앤비 사이트 화면이 대표적인 컴포넌트 구조
    3. 재사용성
        * 반복적인 작업을 줄여주기 때문에 생산성을 높임
        * 유지보수 용이
        * 재사용이 가능 하려면 해당 모듈의 의존성이 없어야함
    4. 든든한 지원군
        * 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있음
    5. 활발한 지식 공유 & 커뮤니티
    6. 모바일 앱 개발 가능
        * 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platform) 모바일앱을 개발할 수 있음
    
    ### React 단점 
    1. 방대한 학습량
        * 단 자바스크립트를 공부한경우 빠르게 습득가능
    2. 높은 상태 관리 복잡도

### 동기식/비동기식

* 동기식 : 요청과 그 결과가 동시에 일어난다는 약속

    * 장점 : 설계가 매우 간단하고 직관적임
    * 단점 : 결과가 주어질 때까지 아무것도 못하고 대기해야함

* 비동기식 : 동시에 일어나지 않는다는 의미 
    * 장점 : 결과가 주어지는데 시간이 걸리더라도 그 시간 동안에 다른 작업을 할 수 있으므로 자원들을 효율적으로 사용가능 
    * 단점 : 동기식보다 설계가 복잡함

* 동기식과 비동기식 차이의 기준 : 서버와 클라이언트가 같이 작동하는지가 기준


#### CDN 링크 
```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>


<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

### 리액트 적용하기
1. 새로운 폴더 생성하기
2. npx create-react-app my-app
3. npm start

---


## 3/9 2주차

## Html

* Single Page Application - 단일 페이지로 구성된 웹 어플리케이션

* HTML5test - 브라우저의 html 호환성 테스트를 검사할 수 있는 사이트

## JavaScript

* ES6 (ECMAScript6) 

* var 보단 const를 많이 사용

* component class형 component, 함수형 component - 함수형 component가 더 간결하고 class형 component에서 하는 걸 다 할 수 있기 때문에 요즘엔 함수형 component 사용 비율 증가

## JSON 스타일 

* key와 key value로 이루어져 있음

### 연산자 

* 대입 연산자, 산술 연산자, 대입+산술 연산자, 증감 연산자 (postfix방식 a++, prefix방식 ++a), 비교 연산자, 동등 연산자/일치 연산자, 이진 논리 연산자, 삼항 연산자

* '==='은 속성까지 따지는 비교 연산자 ex) 1 === '1' 은 false 

### 함수 

* Function statement 형 : 일반적 함수의 형태

* Arrow Function expression 형 : 화살표 함수
ex) const multiply = (a, b) => { return a+b }

---

