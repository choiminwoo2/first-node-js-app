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



