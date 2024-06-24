# Node.js

Javascript는 HTML을 조작하기 위한 것이고, 크롬에서 만든 자바스크립트 해석 엔진이 독자적으로 발전해서 Node.js가 됨

Non-blocking이란?

영화관 웹서버가 있다고 할 때, 티켓을 제공하는 일반적인 서버가 있음

일반 언어로 개발하면, 웹 서버는 순차적으로 해결함. 오래걸리는 요청(200석 예매)을 하면, 다 처리할 때까지 다른 요청을 못받음

반면, node.js로 만든 서버는?

요청을 전부 한번에 받고, 일단 알겠음. 빨리 처리가 되는 순서대로 해결함 ==> Non-blocking 특성

최근 sns, 채팅 서비스는 요청같이 오래걸리는 요청이 있어도 멈추지 않음

코드가 매우 짧고 쉬워서 빠른 개발 가능

웹 서비스 만들 때, 많이쓰는 서버로 Node.js임. 통계나 분석, 이미지 처리같은 기능이라면 다른 C, python 같은 걸 쓰는게 나음

node.js 버전 확인

`node -v`

터미널 환경에서 node.js 실행

`node`

이후 VScode를 활용한 코드예제는 [Github](https://github.com/shinysong/Nodejs-mongoDB)에서 작업함

express라는 라이브러리 설치가 필요함 python의 pip 처럼 node.js는 npm을 사용함

package.json을 만들기 위해서 'npm init'

entry point를 잘 입력하기

`npm install express`

- 서버 만들기

```
const express = require('express');
const app = express();

app.listen(8080, function(){}); 
```
8080포트로 열고, 뒤의 function을 실행해줘

- 서버 실행방법
`node server.js` 

- 경로에 맞게 서버 요청하기

get 요청으로 하면 url으로 요청

```
app.get("/pet", function (req, res) {
  res.send("pet 용품을 쇼핑할 수 있는 페이지 입니다.");
});

```
문자열 대신, html을 send하면 페이지를 할 수 있음

나머지는 유료라서 필요에 따라 찾아서 봐도 될듯

### 강의

- 코딩애플 [https://youtu.be/pTm5E3jcOeY?si=PDDn7leIFBWiGMWy](https://youtu.be/pTm5E3jcOeY?si=PDDn7leIFBWiGMWy)

코딩애플의 '2시간만에 웹서버 쉽게 개발하기 (Node.js+MongoDB)'

일부 강의만 유튜브이고, 나머지는 강의수강을 해야 볼 수 있음

[https://codingapple.com/](https://codingapple.com/)

- 생활코딩
https://youtu.be/3RS_A87IAPA?si=rJ4vidr40KfSPLbX

- Do it Node.js
https://youtu.be/4inLYlZOKAU?si=YzTqpyKf5N1ZOqxo
