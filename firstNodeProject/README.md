# Node.js의 역할

클라이언트에서 요청이 node.js 서버로 들어오게 되면 해당 요청을 처리하고 응답한다. 


# Node.js의 순서

http를 사용하기 위해 노드 내부 모듈을 import 하고 서버를 구동하기 위해
http.createServer() 메소드를 사용해서 구동한다.
이때 해당 메소드는 server 객체를 반환하게 되고 변수로 해당 객체를 생성하여
const server = http.createServer()를 가진다. 
createServer()는 내부적으로 콜백함수를 받는데 변수로 req,res를 사용해 http 요청과 응답을 처리한다.
```javascript
createServer((req,res) => {
  //URL주소
  req.url
  //요청 메서드명
  req.method

  //응답 코드
  res.statusCode
  //응답 헤더 설정
  res.setHeader()
})
```
req는 요청에 대한 여러가지 정보를 담은 객체이고
res는 응답을 위한 객체이다.

## nodejs의 이벤트 처리
```javascript
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
```
on 메서드를 이용하여 req에 대한 처리를 한다. chunk라는 데이터 덩어리를 사용하여 
해당 작업을 진행하고 종료한다.


## nodejs 이벤트


## npm 3rd party package를 활용한 node 서버 구성

npm i nodemon -g 
nodemon를 사용하여 실시간으로 코드를 수정하더라도 서버가 자동으로 재시작 된다.


## nodemon을 활용한 VisualStudio Debug 방법

launch.json 설정.
```
 "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"
```


