# 202130134 한경호

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
```javascript
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
```javascript
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

