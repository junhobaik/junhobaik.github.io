---
title: MongoDB 기초, CRUD 명령어
date: 2019-07-30
tags:
  - mongodb
keywords: 
  - 몽고디비 명령어
  - 몽고 명령어
  - mongodb 명령어
  - mongodb 사용법
  - mongodb insert
  - mongodb update
  - mongodb delete
  - mongodb query
  - 몽고디비 사용법
  - mongodb crud
---

MongoDB 문서를 참고해,
CheatSheet 개념으로 정리해본 기초 Mongo Shell CRUD 명령어.

이 포스트에서는 기초적인 것만 다루며 `writeConcern` Option, Evaluation Query 등은 다루지 않습니다.


## Database

### Database 목록
```bash
> show databases
```

### Database 선택
```bash
> use db_name
```
> 존재하지 않는 DB 선택 시, 이후 DB 삽입등이 이루어지면 자동으로 생성된다.

### Database 제거
```bash
> db.dropDatabase()
```
> 현재 선택되어있는 Database를 제거한다.



## Collection

### Collection 생성
[`db.createCollection(name, [options])`](https://docs.mongodb.com/manual/reference/method/db.createCollection/index.html)
```bash
> db.createCollection(collection_name)
```
> 일반적으로 insert시 지정한 collection이 없는 콜렉션이면 자동으로 생성되므로 따로 Collection을 생성할 필요는 없지만 options를 활용하기 위해서는 createCollection을 사용한다.

### Collection 제거
```bash
> db.collection_name.drop()
```

### Collection 이름 변경
[`db.collection.renameCollection(target, [dropTarget])`](https://docs.mongodb.com/manual/reference/method/db.collection.renameCollection/)
```bash
db.rrecord.renameCollection("record")
```



## Insert

### 하나의 Document 삽입
[`db.collection.insertOne(document, [options])`](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/#db.collection.insertOne)
```bash
> db.collection_name.insertOne(
  { name: "Jhon", age: 24 }
)
```

### 여러 Document 삽입
[`db.collection.insertMany(Array of documents, [options])`](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/#db.collection.insertMany)
```bash
> db.collection_name.insertMany(
  [
    { name: "Jhon", age: 24 },
    { name: "Darcy", age: 26 },
    { name: "Ted", age: 22 }
  ]
)
```

**ordered**: (boolean/default:true) Document를 기술한 순서대로 삽입
```bash
> db.collection_name.insertMany(
  [
    { name: "Jhon", age: 24 },
    { name: "Darcy", age: 26 },
    { name: "Ted", age: 22 }
  ],
  { ordered: true }
)
```




## Query (find)

user Collection의 모든 Document 선택
```bash
> db.user.find()
```

**pretty()**: 결과를 읽기 좋은 형식으로 보여줌
```bash
> db.user.find().pretty()
```

Collection에서 name 필드의 값이 ‘Jhon’인 Dcoument 선택
```bash
> db.user.find({ name: "Jhon" })
```

### [비교 연산자](https://docs.mongodb.com/manual/reference/operator/query-comparison/#query-selectors-comparison) 
- $eq: 지정한 값과 같은
- $gt: 지정한 값보다 큰
- $gte: 지정한 값보다 크거나 같은
- $in: 지정한 배열 안에 속하는
- $lt: 지정한 값보다 작은
- $lte: 지정한 값보다 작거나 같은
- $ne: 지정한 값과 같지 않은
- $nin: 지정한 배열 안에 속하지 않는

Collection에서 level 필드의 값이 3이상인 Document 선택
```bash
db.user.find(
  {
    level: { $gte: 3 }
  }
)
```

Collection에서 level 필드의 값이 2 또는 5 인 Document 선택
```bash
> db.user.find(
  {
    level: { $in: [2, 5] }
  }
)
```


### 논리 연산자
- $or
- $and
- $not : 지정 조건이 false면 true, true이면 false
- $nor : 모든 지정 조건이 false면 true

Collection에서 status가 ‘A’이고 qty가 30 이상인 Document 선택
```bash
> db.inventory.find( 
  {
    $and: [
      { status: "A" },
      { qty: { $lt: 30 } }
    ]
  }
)

> db.inventory.find( 
  { 
    status: "A", 
    qty: { $lt: 30 } 
  } 
)
```
> 위의 두 명령은 동일한 명령이라 할 수 있다.

Collection에서 status가 ‘A’이거나 qty가 30 이상인 Document 선택
```bash
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
```

$and와 $or의 혼합 사용
```bash
db.inventory.find( {
     status: "A",
     $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )
```

### Match an Embedded/Nested Document

`comments: { author: "Jhon", comment: "Good!" }`를 완전히 일치 시킨 선택 명령
```bash
db.users.find(
  { comments: { author: "Jhon", comment: "Good!" } }
)
```
> comments: { comment: "Good!" , author: "Jhon", } 를 선택할 시 순서가 달라 정확히 일치하지 않기 때문에 결과가 나오지 않습니다.

### Query on Nested Field

`{ size: { w: 20, h: 40 } }`와 같은 형식의 Document들이 있을 때 size 필드 안의 h 가 15 이상인 도큐먼트 선택
```bash
db.inventory.find( { "size.h": { $lt: 15 } } )
```

### Query an Array

#### Match an Array
tags가 `["red", "blank"]`로 요소와 순서 모두가 정확히 일치하는 Document 선택
```bash
db.inventory.find( { tags: ["red", "blank"] } )
```

tag안에 red가 있는 document 선택
```bash
db.inventory.find( { tags: "red" } )
```

#### $all
tags가 ‘red’, ‘blank’ 두가지를 가지고 있는 Dcouments
```bash
db.inventory.find( { tags: { $all: ["red", "blank"] } } )
```
> 순서와 상관없고, 정확히 일치하는게 아닌 포함하고 있으면 된다.

#### $elemMatch
`dim_cm: [12, 16]`와 같은 형식이 있다.
`dim_cm` 배열 안에 22초과, 30미만의 값을 포함하고 있는 Document를 선택
```bash
db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } )
```

#### Query for an Element by the Array Index Position
`dim_cm` 배열의 1번째 index 요소가 25 초과인 Document 선택
```bash
db.inventory.find( { "dim_cm.1": { $gt: 25 } } )
```

#### Query an Array by Array Length
tags 배열의 길이가 3인 Document 선택
```bash
db.inventory.find( { "tags": { $size: 3 } } )
```

### Query for Null or Missing Fields
`{ _id: 1, item: null }, { _id: 2 }` 두개의 Document가 있다.
아래는 item이 null인 document를 선택한다.
```bash
db.inventory.find( { item: null } )
```
> { _id: 2 }도 item:null 이기 떄문에 두개의 Document가 모두 선택된다._
아래와 같이 하면 첫번째 document만 정상적으로 선택할 수 있다.
```bash
db.inventory.find( { item : { $type: 10 } } )
```
> [BSON types](https://docs.mongodb.com/manual/reference/bson-types/)
item이 존재하지 않는 Document를 선택한다.
```bash
db.inventory.find( { item : { $exists: false } } )
```



## Update

### [db.collection.updateOne(filter, update, options)](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#db.collection.updateOne)
`{ name: "Jhon", age: 29 }`에서 age를 25로 변경
```bash
db.user.updateOne(
  { name: "Jhon" },
  { $set: { age: 25 } }
)
```

options의 upsert 속성을 사용하면 만약 Kay가 존재하지 않을 시 Document를 새로 만들며 업데이트 된다.
```bash
> db.user.updateOne(
  {name:"Kay"},
  { $set: { age: 25 } },
  {upsert: true}
)
```

배열 field에 값 추가하기 (`skills: []`)
```bash
> db.user.updateOne(
  {name:"Jhon"},
  {$push: {skills: 'react'}}
)
```

배열 field에 값 추가하기 + 정렬
```bash
# 여러개 추가 시 $each 사용
# 알파벳순으로 정렬시 $sort 사용

> db.user.updateOne(
  {name:"Jhon"},
  {$push: 
    skills: {
      $each: ['vue', 'angular'],
      $sort: 1
    }
  }
)
```

배열 field에 값 제거하기
```bash
> db.user.updateOne(
  {name:"Jhon"},
  {$pull: {skills: 'react'}}
)
```

배열 field에서 여러값 제거하기
```bash
> db.user.updateOne(
  {name:"Jhon"},
  {$pull: {skills: $in: ['angular', 'vue']}}
)
```


### [db.collection.updateMany(filter, update, options)](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany)
level이 3이상인 document의 admin을 true로 변경
```bash
db.user.updateMany(
  { level: {$gte: 3} },
  { $set: {admin: true} }
)
```

### [db.collection.replaceOne(filter, replacement, options)](https://docs.mongodb.com/manual/reference/method/db.collection.replaceOne/#db.collection.replaceOne)
name:”Kay”인 Document를 `{name:"Kai", age: 21}`로 교체한다.
```bash
> db.user.replaceOne(
  {name:"Kay"},
  {name:"Kai", age: 21}
)
```
> 교체, 업데이트 후에도 도큐먼트의 ID는 유지된다.

### [db.collection.update(query, update, options)](https://docs.mongodb.com/manual/reference/method/db.collection.update/#db.collection.update)
documnet를 replace 하기
```bash
# 이름이 Jhon인 도큐먼트를 name Jun, age 21으로 교체

> db.user.update(
  {name:"Jhon"}, {name: "Jun", age: 21}
)
```

여러 Document Update, options의 multi 속성이 필요하다, 또는 insertMany를 사용하는 방법도 있다.
```bash
> db.user.update(
  {level: {$lte:3}},
  {$set: {admin: false}},
  {multi: true}
)
```



## Delete

inventory Collection안의 모든 Document가 삭제된다.
```bash
db.inventory.deleteMany({})
```

Collection안의 status가 A인 Dcoument가 모두 삭제된다.
```bash
db.inventory.deleteMany({ status : "A" })
```

Collection안의 status가 D인 Dcoument가 하나 삭제된다.
```bash
db.inventory.deleteOne( { status: "D" } )
```


---- 

References
- [MongoDB | Documentation](https://docs.mongodb.com/manual/)
