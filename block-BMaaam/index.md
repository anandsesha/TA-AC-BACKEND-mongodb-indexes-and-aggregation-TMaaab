writeCode

Insert the data present in users.json into local mongodb database using `mongoimport` into a database called sample and collection named as users.

```
Data insereted in MongoDB

PS F:\AltCampus\MongoDB\mongodb-database-tools-windows-x86_64-100.8.0\bin> .\mongoimport.exe --db sample --collection users --file ..\..\..\ExpressJS\Indexes-and-Aggregation\TA-AC-BACKEND-mongodb-indexes-and-aggregation-TMaaab\block-BMaaam\users.json --jsonArray
2023-11-11T14:44:00.829-0500    connected to: mongodb://localhost/
2023-11-11T14:44:01.008-0500    1000 document(s) imported successfully. 0 document(s) failed to import.
```

Write aggregation queries to perform following tasks.

1. Find all users who are active.

sample> db.users.aggregate({$match: {isActive: true}})
[
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed13d"),
index: 13,
name: 'Sharon Grimes',
isActive: true,
registered: ISODate("2017-12-22T01:04:16.000Z"),
age: 28,
gender: 'female',
eyeColor: 'brown',
favoriteFruit: 'banana',
company: {
title: 'PHARMEX',
email: 'sharongrimes@pharmex.com',
phone: '+1 (993) 428-2724',
location: { country: 'USA', address: '427 Dictum Court' }
},
tags: [ 'dolor', 'eiusmod', 'esse' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed133"),
index: 3,
name: 'Karyn Rhodes',
isActive: true,
registered: ISODate("2014-03-11T03:02:33.000Z"),
age: 39,
gender: 'female',
eyeColor: 'green',
favoriteFruit: 'strawberry',
company: {
title: 'RODEMCO',
email: 'karynrhodes@rodemco.com',
phone: '+1 (801) 505-3760',
location: { country: 'USA', address: '521 Seigel Street' }
},
tags: [ 'cillum', 'exercitation', 'excepteur' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed13f"),
index: 14,
name: 'Wendy Sampson',
isActive: true,
registered: ISODate("2017-03-28T04:46:20.000Z"),
age: 20,
gender: 'female',
eyeColor: 'blue',
favoriteFruit: 'strawberry',
company: {
title: 'BUGSALL',
email: 'wendysampson@bugsall.com',
phone: '+1 (822) 433-3614',
location: { country: 'France', address: '864 Times Placez' }
},
tags: [ 'non', 'sunt', 'officia' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed141"),
index: 10,
name: 'Belinda Zimmerman',
isActive: true,
registered: ISODate("2015-11-19T02:18:09.000Z"),
age: 34,
gender: 'female',
eyeColor: 'green',
favoriteFruit: 'apple',
company: {
title: 'COMTRAK',
email: 'belindazimmerman@comtrak.com',
phone: '+1 (899) 410-3073',
location: { country: 'France', address: '259 Bergen Street' }
},
tags: [ 'nisi', 'officia', 'nisi' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed140"),
index: 15,
name: 'Newman Rodriquez',
isActive: true,
registered: ISODate("2017-09-19T11:25:18.000Z"),
age: 29,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'strawberry',
company: {
title: 'PHARMACON',
email: 'newmanrodriquez@pharmacon.com',
phone: '+1 (906) 591-2086',
location: { country: 'France', address: '624 Madeline Court' }
},
tags: [ 'ad', 'in' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed148"),
index: 22,
name: 'Agnes West',
isActive: true,
registered: ISODate("2014-03-26T01:38:01.000Z"),
age: 39,
gender: 'female',
eyeColor: 'blue',
favoriteFruit: 'apple',
company: {
title: 'GEEKMOSIS',
email: 'agneswest@geekmosis.com',
phone: '+1 (983) 462-2577',
location: { country: 'Italy', address: '652 Johnson Street' }
},
tags: [ 'sint', 'sit' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed147"),
index: 9,
name: 'Tina Barnett',
isActive: true,
registered: ISODate("2015-03-09T11:16:38.000Z"),
age: 39,
gender: 'female',
eyeColor: 'blue',
favoriteFruit: 'apple',
company: {
title: 'JETSILK',
email: 'tinabarnett@jetsilk.com',
phone: '+1 (963) 569-3905',
location: { country: 'Germany', address: '514 Lefferts Avenue' }
},
tags: [ 'veniam', 'proident' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed149"),
index: 23,
name: 'Bowman Whitaker',
isActive: true,
registered: ISODate("2014-06-28T04:39:11.000Z"),
age: 21,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'apple',
company: {
title: 'HELIXO',
email: 'bowmanwhitaker@helixo.com',
phone: '+1 (992) 530-2197',
location: { country: 'Italy', address: '878 Erasmus Street' }
},
tags: [ 'adipisicing', 'in' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed13a"),
index: 7,
name: 'Anastasia Blake',
isActive: true,
registered: ISODate("2016-07-01T02:32:46.000Z"),
age: 40,
gender: 'female',
eyeColor: 'brown',
favoriteFruit: 'strawberry',
company: {
title: 'ZERBINA',
email: 'anastasiablake@zerbina.com',
phone: '+1 (867) 563-3788',
location: { country: 'Italy', address: '147 Montague Terrace' }
},
tags: [ 'Lorem', 'consequat', 'ex', 'pariatur', 'labore' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed14b"),
index: 25,
name: 'Bryant Thornton',
isActive: true,
registered: ISODate("2016-07-02T06:12:47.000Z"),
age: 37,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'strawberry',
company: {
title: 'ZENCO',
email: 'bryantthornton@zenco.com',
phone: '+1 (863) 499-2732',
location: { country: 'France', address: '744 Poly Place' }
},
tags: [ 'ut', 'consectetur', 'anim', 'id', 'velit' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed143"),
index: 18,
name: 'Mable Pratt',
isActive: true,
registered: ISODate("2016-04-22T11:00:05.000Z"),
age: 32,
gender: 'female',
eyeColor: 'blue',
favoriteFruit: 'banana',
company: {
title: 'PARAGONIA',
email: 'mablepratt@paragonia.com',
phone: '+1 (875) 523-3825',
location: { country: 'USA', address: '767 Hendrix Street' }
},
tags: [ 'excepteur', 'et', 'ullamco', 'nisi', 'magna' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed138"),
index: 5,
name: 'Grace Larson',
isActive: true,
registered: ISODate("2014-04-20T11:37:23.000Z"),
age: 20,
gender: 'female',
eyeColor: 'blue',
favoriteFruit: 'apple',
company: {
title: 'OVOLO',
email: 'gracelarson@ovolo.com',
phone: '+1 (930) 510-3310',
location: { country: 'USA', address: '932 Linden Street' }
},
tags: [ 'fugiat', 'minim' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed14d"),
index: 26,
name: 'Maldonado Osborne',
isActive: true,
registered: ISODate("2015-09-10T01:38:41.000Z"),
age: 31,
gender: 'male',
eyeColor: 'brown',
favoriteFruit: 'strawberry',
company: {
title: 'RECRISYS',
email: 'maldonadoosborne@recrisys.com',
phone: '+1 (871) 540-3394',
location: { country: 'USA', address: '804 Revere Place' }
},
tags: [ 'elit', 'est', 'ex', 'proident', 'mollit' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed14e"),
index: 27,
name: 'Herman David',
isActive: true,
registered: ISODate("2018-02-22T12:21:33.000Z"),
age: 33,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'strawberry',
company: {
title: 'LUNCHPAD',
email: 'hermandavid@lunchpad.com',
phone: '+1 (946) 447-3775',
location: { country: 'Italy', address: '230 Anthony Street' }
},
tags: [ 'adipisicing', 'dolore', 'fugiat', 'exercitation' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed150"),
index: 28,
name: 'Berta Case',
isActive: true,
registered: ISODate("2014-01-29T09:09:27.000Z"),
age: 23,
gender: 'female',
eyeColor: 'brown',
favoriteFruit: 'strawberry',
company: {
title: 'TURNABOUT',
email: 'bertacase@turnabout.com',
phone: '+1 (892) 445-2890',
location: { country: 'USA', address: '802 Jefferson Avenue' }
},
tags: [ 'velit', 'est', 'id', 'proident' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed153"),
index: 33,
name: 'Livingston Huber',
isActive: true,
registered: ISODate("2016-07-25T12:06:06.000Z"),
age: 40,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'strawberry',
company: {
title: 'OMNIGOG',
email: 'livingstonhuber@omnigog.com',
phone: '+1 (987) 449-3557',
location: { country: 'Italy', address: '786 Homecrest Avenue' }
},
tags: [ 'incididunt', 'dolore', 'enim', 'mollit' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed159"),
index: 39,
name: 'Latasha Bailey',
isActive: true,
registered: ISODate("2016-03-03T07:27:59.000Z"),
age: 25,
gender: 'female',
eyeColor: 'blue',
favoriteFruit: 'apple',
company: {
title: 'SLUMBERIA',
email: 'latashabailey@slumberia.com',
phone: '+1 (939) 470-3906',
location: { country: 'Italy', address: '915 Freeman Street' }
},
tags: [ 'pariatur', 'veniam', 'amet' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed157"),
index: 38,
name: 'Elliott Phelps',
isActive: true,
registered: ISODate("2016-06-29T08:57:29.000Z"),
age: 32,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'apple',
company: {
title: 'OPTIQUE',
email: 'elliottphelps@optique.com',
phone: '+1 (806) 457-2761',
location: { country: 'France', address: '710 Lawrence Street' }
},
tags: [ 'nisi', 'deserunt' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed158"),
index: 37,
name: 'Combs Graham',
isActive: true,
registered: ISODate("2015-06-24T10:30:08.000Z"),
age: 20,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'apple',
company: {
title: 'FREAKIN',
email: 'combsgraham@freakin.com',
phone: '+1 (803) 596-3695',
location: { country: 'Italy', address: '278 Bayard Street' }
},
tags: [ 'eiusmod', 'irure', 'in', 'officia' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed15b"),
index: 41,
name: 'Nola Foster',
isActive: true,
registered: ISODate("2014-10-30T05:13:26.000Z"),
age: 21,
gender: 'female',
eyeColor: 'green',
favoriteFruit: 'banana',
company: {
title: 'MEDALERT',
email: 'nolafoster@medalert.com',
phone: '+1 (925) 493-3625',
location: { country: 'Italy', address: '496 Moore Place' }
},
tags: [ 'mollit', 'fugiat', 'consequat' ]
}
]

2. Find all users whose name includes `blake` case insensitive.

sample> db.users.find({$text: {$search: "blake"}})
[
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed13a"),
index: 7,
name: 'Anastasia Blake',
isActive: true,
registered: ISODate("2016-07-01T02:32:46.000Z"),
age: 40,
gender: 'female',
eyeColor: 'brown',
favoriteFruit: 'strawberry',
company: {
title: 'ZERBINA',
email: 'anastasiablake@zerbina.com',
phone: '+1 (867) 563-3788',
location: { country: 'Italy', address: '147 Montague Terrace' }
},
tags: [ 'Lorem', 'consequat', 'ex', 'pariatur', 'labore' ]
}
]

3. Find all males.
   sample> db.users.aggregate([{$match: {gender: 'male'}}])
   [
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed13b"),
   index: 8,
   name: 'Dale Holman',
   isActive: false,
   registered: ISODate("2014-07-11T09:08:36.000Z"),
   age: 22,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'strawberry',
   company: {
   title: 'ISONUS',
   email: 'daleholman@isonus.com',
   phone: '+1 (871) 452-3036',
   location: { country: 'Italy', address: '586 Blake Court' }
   },
   tags: [ 'tempor', 'aliqua', 'duis' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed135"),
   index: 2,
   name: 'Hays Wise',
   isActive: false,
   registered: ISODate("2015-02-23T10:22:15.000Z"),
   age: 24,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'strawberry',
   company: {
   title: 'EXIAND',
   email: 'hayswise@exiand.com',
   phone: '+1 (801) 583-3393',
   location: { country: 'France', address: '795 Borinquen Pl' }
   },
   tags: [ 'amet', 'ad', 'elit', 'ipsum' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed13c"),
   index: 11,
   name: 'Morrison Sheppard',
   isActive: false,
   registered: ISODate("2014-07-23T04:46:35.000Z"),
   age: 34,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'strawberry',
   company: {
   title: 'CANDECOR',
   email: 'morrisonsheppard@candecor.com',
   phone: '+1 (825) 473-3920',
   location: { country: 'USA', address: '585 Wilson Street' }
   },
   tags: [ 'culpa', 'adipisicing', 'veniam', 'aliquip' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed13e"),
   index: 12,
   name: 'Le Farley',
   isActive: false,
   registered: ISODate("2014-11-24T07:41:12.000Z"),
   age: 36,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'banana',
   company: {
   title: 'JAMNATION',
   email: 'lefarley@jamnation.com',
   phone: '+1 (962) 402-3088',
   location: { country: 'USA', address: '613 Lewis Avenue' }
   },
   tags: [ 'exercitation', 'enim', 'deserunt' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed142"),
   index: 16,
   name: 'Santana Preston',
   isActive: false,
   registered: ISODate("2014-05-23T12:41:39.000Z"),
   age: 40,
   gender: 'male',
   eyeColor: 'blue',
   favoriteFruit: 'apple',
   company: {
   title: 'AQUAFIRE',
   email: 'santanapreston@aquafire.com',
   phone: '+1 (861) 525-2717',
   location: { country: 'France', address: '133 Bushwick Avenue' }
   },
   tags: [ 'ex', 'magna', 'qui', 'laborum', 'ad' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed140"),
   index: 15,
   name: 'Newman Rodriquez',
   isActive: true,
   registered: ISODate("2017-09-19T11:25:18.000Z"),
   age: 29,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'strawberry',
   company: {
   title: 'PHARMACON',
   email: 'newmanrodriquez@pharmacon.com',
   phone: '+1 (906) 591-2086',
   location: { country: 'France', address: '624 Madeline Court' }
   },
   tags: [ 'ad', 'in' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed146"),
   index: 20,
   name: 'Franco Ochoa',
   isActive: false,
   registered: ISODate("2016-08-02T04:15:34.000Z"),
   age: 35,
   gender: 'male',
   eyeColor: 'brown',
   favoriteFruit: 'banana',
   company: {
   title: 'ARTWORLDS',
   email: 'francoochoa@artworlds.com',
   phone: '+1 (922) 487-3093',
   location: { country: 'Italy', address: '838 Kane Place' }
   },
   tags: [ 'eiusmod', 'culpa' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed145"),
   index: 19,
   name: 'Mcguire Vincent',
   isActive: false,
   registered: ISODate("2017-01-28T01:53:06.000Z"),
   age: 24,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'strawberry',
   company: {
   title: 'ELENTRIX',
   email: 'mcguirevincent@elentrix.com',
   phone: '+1 (924) 572-3321',
   location: { country: 'USA', address: '347 Sandford Street' }
   },
   tags: [ 'do', 'aute', 'incididunt' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed149"),
   index: 23,
   name: 'Bowman Whitaker',
   isActive: true,
   registered: ISODate("2014-06-28T04:39:11.000Z"),
   age: 21,
   gender: 'male',
   eyeColor: 'blue',
   favoriteFruit: 'apple',
   company: {
   title: 'HELIXO',
   email: 'bowmanwhitaker@helixo.com',
   phone: '+1 (992) 530-2197',
   location: { country: 'Italy', address: '878 Erasmus Street' }
   },
   tags: [ 'adipisicing', 'in' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed14b"),
   index: 25,
   name: 'Bryant Thornton',
   isActive: true,
   registered: ISODate("2016-07-02T06:12:47.000Z"),
   age: 37,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'strawberry',
   company: {
   title: 'ZENCO',
   email: 'bryantthornton@zenco.com',
   phone: '+1 (863) 499-2732',
   location: { country: 'France', address: '744 Poly Place' }
   },
   tags: [ 'ut', 'consectetur', 'anim', 'id', 'velit' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed14d"),
   index: 26,
   name: 'Maldonado Osborne',
   isActive: true,
   registered: ISODate("2015-09-10T01:38:41.000Z"),
   age: 31,
   gender: 'male',
   eyeColor: 'brown',
   favoriteFruit: 'strawberry',
   company: {
   title: 'RECRISYS',
   email: 'maldonadoosborne@recrisys.com',
   phone: '+1 (871) 540-3394',
   location: { country: 'USA', address: '804 Revere Place' }
   },
   tags: [ 'elit', 'est', 'ex', 'proident', 'mollit' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed14e"),
   index: 27,
   name: 'Herman David',
   isActive: true,
   registered: ISODate("2018-02-22T12:21:33.000Z"),
   age: 33,
   gender: 'male',
   eyeColor: 'blue',
   favoriteFruit: 'strawberry',
   company: {
   title: 'LUNCHPAD',
   email: 'hermandavid@lunchpad.com',
   phone: '+1 (946) 447-3775',
   location: { country: 'Italy', address: '230 Anthony Street' }
   },
   tags: [ 'adipisicing', 'dolore', 'fugiat', 'exercitation' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed151"),
   index: 32,
   name: 'Curtis Bruce',
   isActive: false,
   registered: ISODate("2014-07-10T05:38:35.000Z"),
   age: 39,
   gender: 'male',
   eyeColor: 'blue',
   favoriteFruit: 'apple',
   company: {
   title: 'TETAK',
   email: 'curtisbruce@tetak.com',
   phone: '+1 (952) 488-3266',
   location: { country: 'France', address: '190 Frost Street' }
   },
   tags: [ 'qui', 'voluptate', 'fugiat', 'irure' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed153"),
   index: 33,
   name: 'Livingston Huber',
   isActive: true,
   registered: ISODate("2016-07-25T12:06:06.000Z"),
   age: 40,
   gender: 'male',
   eyeColor: 'blue',
   favoriteFruit: 'strawberry',
   company: {
   title: 'OMNIGOG',
   email: 'livingstonhuber@omnigog.com',
   phone: '+1 (987) 449-3557',
   location: { country: 'Italy', address: '786 Homecrest Avenue' }
   },
   tags: [ 'incididunt', 'dolore', 'enim', 'mollit' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed156"),
   index: 30,
   name: 'Hahn Pope',
   isActive: false,
   registered: ISODate("2014-08-21T11:37:18.000Z"),
   age: 21,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'banana',
   company: {
   title: 'DYNO',
   email: 'hahnpope@dyno.com',
   phone: '+1 (954) 478-2480',
   location: { country: 'Germany', address: '171 Devoe Street' }
   },
   tags: [ 'consectetur', 'exercitation', 'velit', 'enim', 'adipisicing' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed157"),
   index: 38,
   name: 'Elliott Phelps',
   isActive: true,
   registered: ISODate("2016-06-29T08:57:29.000Z"),
   age: 32,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'apple',
   company: {
   title: 'OPTIQUE',
   email: 'elliottphelps@optique.com',
   phone: '+1 (806) 457-2761',
   location: { country: 'France', address: '710 Lawrence Street' }
   },
   tags: [ 'nisi', 'deserunt' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed158"),
   index: 37,
   name: 'Combs Graham',
   isActive: true,
   registered: ISODate("2015-06-24T10:30:08.000Z"),
   age: 20,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'apple',
   company: {
   title: 'FREAKIN',
   email: 'combsgraham@freakin.com',
   phone: '+1 (803) 596-3695',
   location: { country: 'Italy', address: '278 Bayard Street' }
   },
   tags: [ 'eiusmod', 'irure', 'in', 'officia' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed15a"),
   index: 40,
   name: 'Benjamin Espinoza',
   isActive: false,
   registered: ISODate("2016-06-25T01:47:53.000Z"),
   age: 40,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'strawberry',
   company: {
   title: 'ENDIPIN',
   email: 'benjaminespinoza@endipin.com',
   phone: '+1 (826) 577-2331',
   location: { country: 'France', address: '844 Pierrepont Street' }
   },
   tags: [ 'duis', 'nisi', 'veniam', 'amet', 'enim' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed15f"),
   index: 46,
   name: 'Wong Weber',
   isActive: true,
   registered: ISODate("2016-10-06T04:22:21.000Z"),
   age: 23,
   gender: 'male',
   eyeColor: 'brown',
   favoriteFruit: 'apple',
   company: {
   title: 'SULTRAXIN',
   email: 'wongweber@sultraxin.com',
   phone: '+1 (896) 483-2065',
   location: { country: 'USA', address: '574 Madison Street' }
   },
   tags: [ 'aliquip', 'laboris', 'minim', 'est' ]
   },
   {
   \_id: ObjectId("5ca6fa078e7cfba44f7ed15e"),
   index: 43,
   name: 'Bentley Santana',
   isActive: false,
   registered: ISODate("2015-08-25T03:52:55.000Z"),
   age: 24,
   gender: 'male',
   eyeColor: 'green',
   favoriteFruit: 'apple',
   company: {
   title: 'GEOFORMA',
   email: 'bentleysantana@geoforma.com',
   phone: '+1 (868) 515-2120',
   location: { country: 'Germany', address: '858 Royce Street' }
   },
   tags: [ 'nostrud', 'excepteur', 'ad' ]
   }
   ]

4. Find all active males.

sample> db.users.aggregate([{$match: {gender: 'male',isActive: true}}])
[
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed140"),
index: 15,
name: 'Newman Rodriquez',
isActive: true,
registered: ISODate("2017-09-19T11:25:18.000Z"),
age: 29,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'strawberry',
company: {
title: 'PHARMACON',
email: 'newmanrodriquez@pharmacon.com',
phone: '+1 (906) 591-2086',
location: { country: 'France', address: '624 Madeline Court' }
},
tags: [ 'ad', 'in' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed149"),
index: 23,
name: 'Bowman Whitaker',
isActive: true,
registered: ISODate("2014-06-28T04:39:11.000Z"),
age: 21,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'apple',
company: {
title: 'HELIXO',
email: 'bowmanwhitaker@helixo.com',
phone: '+1 (992) 530-2197',
location: { country: 'Italy', address: '878 Erasmus Street' }
},
tags: [ 'adipisicing', 'in' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed14b"),
index: 25,
name: 'Bryant Thornton',
isActive: true,
registered: ISODate("2016-07-02T06:12:47.000Z"),
age: 37,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'strawberry',
company: {
title: 'ZENCO',
email: 'bryantthornton@zenco.com',
phone: '+1 (863) 499-2732',
location: { country: 'France', address: '744 Poly Place' }
},
tags: [ 'ut', 'consectetur', 'anim', 'id', 'velit' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed14d"),
index: 26,
name: 'Maldonado Osborne',
isActive: true,
registered: ISODate("2015-09-10T01:38:41.000Z"),
age: 31,
gender: 'male',
eyeColor: 'brown',
favoriteFruit: 'strawberry',
company: {
title: 'RECRISYS',
email: 'maldonadoosborne@recrisys.com',
phone: '+1 (871) 540-3394',
location: { country: 'USA', address: '804 Revere Place' }
},
tags: [ 'elit', 'est', 'ex', 'proident', 'mollit' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed14e"),
index: 27,
name: 'Herman David',
isActive: true,
registered: ISODate("2018-02-22T12:21:33.000Z"),
age: 33,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'strawberry',
company: {
title: 'LUNCHPAD',
email: 'hermandavid@lunchpad.com',
phone: '+1 (946) 447-3775',
location: { country: 'Italy', address: '230 Anthony Street' }
},
tags: [ 'adipisicing', 'dolore', 'fugiat', 'exercitation' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed153"),
index: 33,
name: 'Livingston Huber',
isActive: true,
registered: ISODate("2016-07-25T12:06:06.000Z"),
age: 40,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'strawberry',
company: {
title: 'OMNIGOG',
email: 'livingstonhuber@omnigog.com',
phone: '+1 (987) 449-3557',
location: { country: 'Italy', address: '786 Homecrest Avenue' }
},
tags: [ 'incididunt', 'dolore', 'enim', 'mollit' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed157"),
index: 38,
name: 'Elliott Phelps',
isActive: true,
registered: ISODate("2016-06-29T08:57:29.000Z"),
age: 32,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'apple',
company: {
title: 'OPTIQUE',
email: 'elliottphelps@optique.com',
phone: '+1 (806) 457-2761',
location: { country: 'France', address: '710 Lawrence Street' }
},
tags: [ 'nisi', 'deserunt' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed158"),
index: 37,
name: 'Combs Graham',
isActive: true,
registered: ISODate("2015-06-24T10:30:08.000Z"),
age: 20,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'apple',
company: {
title: 'FREAKIN',
email: 'combsgraham@freakin.com',
phone: '+1 (803) 596-3695',
location: { country: 'Italy', address: '278 Bayard Street' }
},
tags: [ 'eiusmod', 'irure', 'in', 'officia' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed15f"),
index: 46,
name: 'Wong Weber',
isActive: true,
registered: ISODate("2016-10-06T04:22:21.000Z"),
age: 23,
gender: 'male',
eyeColor: 'brown',
favoriteFruit: 'apple',
company: {
title: 'SULTRAXIN',
email: 'wongweber@sultraxin.com',
phone: '+1 (896) 483-2065',
location: { country: 'USA', address: '574 Madison Street' }
},
tags: [ 'aliquip', 'laboris', 'minim', 'est' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed162"),
index: 48,
name: 'Vaughan Walters',
isActive: true,
registered: ISODate("2017-01-10T02:28:38.000Z"),
age: 35,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'strawberry',
company: {
title: 'SATIANCE',
email: 'vaughanwalters@satiance.com',
phone: '+1 (842) 551-3667',
location: { country: 'USA', address: '333 Cherry Street' }
},
tags: [ 'dolore', 'eiusmod', 'amet' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed164"),
index: 50,
name: 'Larson Terry',
isActive: true,
registered: ISODate("2017-10-04T06:57:50.000Z"),
age: 23,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'banana',
company: {
title: 'APPLICA',
email: 'larsonterry@applica.com',
phone: '+1 (931) 592-2888',
location: { country: 'Germany', address: '877 Elizabeth Place' }
},
tags: [ 'est', 'reprehenderit', 'deserunt' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed168"),
index: 54,
name: 'Bolton Henson',
isActive: true,
registered: ISODate("2014-01-27T09:38:58.000Z"),
age: 31,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'apple',
company: {
title: 'CEPRENE',
email: 'boltonhenson@ceprene.com',
phone: '+1 (809) 524-3642',
location: { country: 'France', address: '404 Vermont Street' }
},
tags: [ 'amet', 'reprehenderit', 'culpa', 'eiusmod', 'laborum' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed16e"),
index: 59,
name: 'Mercado Riddle',
isActive: true,
registered: ISODate("2016-09-15T02:09:35.000Z"),
age: 38,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'strawberry',
company: {
title: 'DUOFLEX',
email: 'mercadoriddle@duoflex.com',
phone: '+1 (880) 497-2698',
location: { country: 'France', address: '177 Fayette Street' }
},
tags: [ 'consequat', 'sint' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed170"),
index: 61,
name: 'Fuentes Vang',
isActive: true,
registered: ISODate("2015-04-07T11:24:03.000Z"),
age: 38,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'banana',
company: {
title: 'ISOTERNIA',
email: 'fuentesvang@isoternia.com',
phone: '+1 (892) 439-3602',
location: { country: 'France', address: '301 Ryder Street' }
},
tags: [ 'duis', 'consectetur' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed167"),
index: 53,
name: 'Cobb Wells',
isActive: true,
registered: ISODate("2016-08-12T07:51:53.000Z"),
age: 20,
gender: 'male',
eyeColor: 'blue',
favoriteFruit: 'banana',
company: {
title: 'SLOGANAUT',
email: 'cobbwells@sloganaut.com',
phone: '+1 (813) 511-3958',
location: { country: 'Germany', address: '258 Meeker Avenue' }
},
tags: [ 'sit', 'veniam', 'laborum', 'exercitation' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed182"),
index: 76,
name: 'Downs Cantu',
isActive: true,
registered: ISODate("2017-07-13T07:52:13.000Z"),
age: 29,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'apple',
company: {
title: 'HIVEDOM',
email: 'downscantu@hivedom.com',
phone: '+1 (824) 524-3896',
location: { country: 'USA', address: '620 Lincoln Place' }
},
tags: [ 'aliquip', 'qui' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed189"),
index: 89,
name: 'Hendrix Boyle',
isActive: true,
registered: ISODate("2014-01-03T11:21:55.000Z"),
age: 22,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'strawberry',
company: {
title: 'MAROPTIC',
email: 'hendrixboyle@maroptic.com',
phone: '+1 (966) 566-2539',
location: { country: 'Germany', address: '240 Mill Street' }
},
tags: [ 'ea', 'aliquip', 'nostrud', 'anim' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed186"),
index: 84,
name: 'Rollins Serrano',
isActive: true,
registered: ISODate("2015-06-02T10:19:36.000Z"),
age: 29,
gender: 'male',
eyeColor: 'brown',
favoriteFruit: 'strawberry',
company: {
title: 'DAIDO',
email: 'rollinsserrano@daido.com',
phone: '+1 (821) 455-2343',
location: { country: 'France', address: '151 Woodrow Court' }
},
tags: [ 'nostrud', 'cillum', 'officia', 'voluptate', 'consequat' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed188"),
index: 88,
name: 'Villarreal Page',
isActive: true,
registered: ISODate("2015-10-15T02:14:01.000Z"),
age: 40,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'banana',
company: {
title: 'POSHOME',
email: 'villarrealpage@poshome.com',
phone: '+1 (827) 490-3082',
location: { country: 'Germany', address: '784 Lester Court' }
},
tags: [ 'sunt', 'pariatur', 'sit', 'in' ]
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed18f"),
index: 93,
name: 'Cline Kemp',
isActive: true,
registered: ISODate("2014-12-24T08:04:01.000Z"),
age: 23,
gender: 'male',
eyeColor: 'green',
favoriteFruit: 'apple',
company: {
title: 'GRACKER',
email: 'clinekemp@gracker.com',
phone: '+1 (948) 433-3172',
location: { country: 'Italy', address: '397 Seagate Avenue' }
},
tags: [ 'labore', 'occaecat', 'incididunt' ]
}
]

5. Find all active females whose age is >= 25.

sample> db.users.aggregate([ { $match: { gender: 'female', isActive: true, age: { $gte: 25 } } }] );

6. Find all 40+ males with green eyecolor.

sample> db.users.aggregate([ { $match: { gender: 'male',age: {$gte: 40}, eyeColor: 'green' } }] );

7. Find all blue eyed men working in 'USA'.

sample> db.users.aggregate([{$match: {gender: 'male', eyeColor: 'blue'}}])

8. Find all female working in Germany with green eyes and apple as favoriteFruit.

sample> db.users.aggregate([{$match: {'company.location.country': 'Germany', gender: "female", eyeColor: 'green',favoriteFruit: 'apple'}}])

9. Count total male and females.

sample> db.users.aggregate([{$group: {_id: '$gender', count: {$sum: 1}}}])
[ { _id: 'female', count: 507 }, { _id: 'male', count: 493 } ]

10. Count all whose eyeColor is green.

sample> db.users.aggregate([{$match: {eyeColor: 'green'}}, {$group: {_id: '$eyeColor', count: {$sum: 1}}}])
[ { _id: 'green', count: 330 } ]

11. Count all 20+ females who have brown eyes.

sample> db.users.aggregate([{$match: {eyeColor: 'brown',gender: 'female' ,age: {$gte: 20}}}, {$group: {_id: '$eyeColor', count: {$sum: 1}}}])
[ { _id: 'brown', count: 158 } ]

12. Count all occurences of all eyeColors.
    Something like:-

```
blue -> 30
brown -> 67
green -> 123
```

sample> db.users.aggregate([{$group: {_id: '$eyeColor', count: {$sum: 1}}}])
[
{ _id: 'brown', count: 337 },
{ _id: 'green', count: 330 },
{ _id: 'blue', count: 333 }
]

13. Count all females whose tags array include `amet` in it.

sample> db.users.aggregate([{$match: {gender: 'female', tags: "amet"}},{$group: {_id: '$gender', count: {$sum: 1}}}])
[ { _id: 'female', count: 33 } ]

sample> db.users.aggregate([{$match: {gender: 'female', tags: {$in: ["amet"]}}},{$group: {_id: '$gender', count: {$sum: 1}}}])
[ { _id: 'female', count: 33 } ]

14. Find the average age of entire collection

sample> db.users.aggregate([{$group: {_id: null, avg: {$avg: '$age'}}}])
[ { _id: null, avg: 29.835 } ]

15. Find the average age of males and females i.e. group them by gender.

sample> db.users.aggregate([{$group: {_id: '$gender', avg: {$avg: '$age'}}}])
[
{ _id: 'female', avg: 29.81854043392505 },
{ _id: 'male', avg: 29.851926977687626 }
]

16. Find the user with maximum age.

sample> db.users.aggregate([{$group: {_id: null, max_age: {$max: '$age'}}}])
[ { _id: null, max_age: 40 } ]

17. Find the document with minimum age.

sample> db.users.aggregate([ { $group: { _id: null, min_age: { $min: '$age' }, document: { $first: '$$ROOT' } } }] );
//document - stores the entire document corresponding to the minimum age using $first: '$$ROOT'.

18. Find the sum of ages of all males and females.

sample> db.users.aggregate([ { $group: { _id: '$gender', sum_M_F: { $sum: '$age' } } }] );
[ { _id: 'female', sum_M_F: 15118 }, { _id: 'male', sum_M_F: 14717 } ]

19. Group all males by their eyeColor.

sample> db.users.aggregate([{$match: {gender: 'male'}},{$group: {_id: '$eyeColor',count: {$sum: 1}}},{$project: {gender: 'male', _id: '$_id', count: 1}}])
[
{ count: 179, gender: 'male', _id: 'brown' },
{ count: 151, gender: 'male', _id: 'green' },
{ count: 163, gender: 'male', _id: 'blue' }
]

20. group all 30+ females by their age.
    sample> db.users.aggregate([{$match: {gender: 'female',age: {$gte: 30}}},{$group: {_id: '$name'}}])
    [
    { _id: 'Tasha Randall' },
    { _id: 'Constance Alvarado' },
    { _id: 'Ida Holder' },
    { _id: 'Alexandra Vance' },
    { _id: 'Natalia Rasmussen' },
    { _id: 'Misty Stewart' },
    { _id: 'Rosanne Burgess' },
    { _id: 'Claire Brady' },
    { _id: 'Consuelo Waller' },
    { _id: 'Nora Hester' },
    { _id: 'Marietta Webster' },
    { _id: 'Michele Suarez' },
    { _id: 'Callie Dillon' },
    { _id: 'Lillie Lloyd' },
    { _id: 'Shelly Wilson' },
    { _id: 'Sandy Dejesus' },
    { _id: 'Neva Marquez' },
    { _id: 'Lula Robles' },
    { _id: 'Aida Klein' },
    { _id: 'Debora Barlow' }
    ]

// Below gives the same. With name and age
sample> db.users.aggregate([ { $match: { gender: 'female', age: { $gte: 30 } } }, { $group: { _id: '$gender',females: { $push: { name: '$name', age: '$age' } } } }, { $unwind: '$females' }] );
[
{ _id: 'female', females: { name: 'Kitty Snow', age: 38 } },
{ _id: 'female', females: { name: 'Alison Farmer', age: 33 } },
{ _id: 'female', females: { name: 'Karyn Rhodes', age: 39 } },
{ _id: 'female', females: { name: 'Belinda Zimmerman', age: 34 } },
{ _id: 'female', females: { name: 'Agnes West', age: 39 } },
{ _id: 'female', females: { name: 'Tina Barnett', age: 39 } },
{ _id: 'female', females: { name: 'Carmella Morse', age: 39 } },
{ _id: 'female', females: { name: 'Anastasia Blake', age: 40 } },
{ _id: 'female', females: { name: 'Mable Pratt', age: 32 } },
{ _id: 'female', females: { name: 'Roseann Conrad', age: 34 } },
{ _id: 'female', females: { name: 'Leila Cervantes', age: 40 } },
{ _id: 'female', females: { name: 'Abby Wallace', age: 40 } },
{ _id: 'female', females: { name: 'Bobbie Sawyer', age: 30 } },
{ _id: 'female', females: { name: 'Alexandra Vance', age: 38 } },
{ _id: 'female', females: { name: 'Christa Maxwell', age: 40 } },
{ _id: 'female', females: { name: 'Milagros Levy', age: 33 } },
{ _id: 'female', females: { name: 'Sheila Lynch', age: 31 } },
{ _id: 'female', females: { name: 'Maggie Meyer', age: 31 } },
{ _id: 'female', females: { name: 'Hazel Mason', age: 34 } },
{ _id: 'female', females: { name: 'Deanna Sweeney', age: 38 } }
]

21. Group all 23+ males with blue eyes working in Germany.

sample> db.users.aggregate([ { $match: { gender: 'male', age: { $gte: 23 }, eyeColor: 'blue', 'company.location.country': 'Germany' } }, { $group: { _id: '$age', males: { $push: { name: '$name', age: '$age' } } } }, { $unwind: '$males' }, {
$project: { _id: 0, name: '$males.name', age: '$males.age' } }] );
[
{ name: 'Vinson Barrera', age: 35 },
{ name: 'Neal Pena', age: 35 },
{ name: 'Larson Terry', age: 23 },
{ name: 'Marquez Mosley', age: 31 },
{ name: 'Morin Alston', age: 31 },
{ name: 'Lindsey Stanley', age: 31 },
{ name: 'Ellis Merritt', age: 40 },
{ name: 'Monroe Francis', age: 30 },
{ name: 'Buckley Dominguez', age: 30 },
{ name: 'Duncan Gilbert', age: 30 },
{ name: 'Tillman Grant', age: 32 },
{ name: 'Adams Hernandez', age: 32 },
{ name: 'Luna Mathis', age: 38 },
{ name: 'Greer Riggs', age: 38 },
{ name: 'Cash Gould', age: 29 },
{ name: 'Stuart Roy', age: 29 },
{ name: 'Acosta Walter', age: 24 },
{ name: 'May Glover', age: 24 },
{ name: 'Chavez Elliott', age: 39 },
{ name: 'Schneider Brock', age: 39 }
]

22. Group all by tag names i.e. use \$unwind since tags are array.

sample> db.users.aggregate([ { $unwind: '$tags' }, { $group: { _id: '$tags', count: { $sum: 1 } } }] );

//even the count part not needed

[
{ _id: 'Lorem', count: 48 },
{ _id: 'ipsum', count: 50 },
{ _id: 'pariatur', count: 58 },
{ _id: 'dolore', count: 62 },
{ _id: 'id', count: 47 },
{ _id: 'incididunt', count: 59 },
{ _id: 'laborum', count: 61 },
{ _id: 'ea', count: 65 },
{ _id: 'culpa', count: 70 },
{ _id: 'dolor', count: 82 },
{ _id: 'elit', count: 54 },
{ _id: 'esse', count: 53 },
{ _id: 'nisi', count: 48 },
{ _id: 'labore', count: 62 },
{ _id: 'laboris', count: 52 },
{ _id: 'velit', count: 59 },
{ _id: 'officia', count: 56 },
{ _id: 'aliqua', count: 52 },
{ _id: 'aute', count: 55 },
{ _id: 'ut', count: 68 }
]

23. Group all males whose favoriteFruit is `banana` who have registered before 2015.

sample> db.users.aggregate([ { $match: { gender: 'male', favoriteFruit: 'banana', registered: { $lt: ISODate('2015-01-01') } } }, { $group: { _id: '$gender', males: { $push: { name: '$name', favoriteFruit: '$favoriteFruit', date: '$registered' } } } }, { $project: { _id: 0, gender: '$_id', males: 1 } } ])
[
{
males: [
{
name: 'Le Farley',
favoriteFruit: 'banana',
date: ISODate("2014-11-24T07:41:12.000Z")
},
{
name: 'Hahn Pope',
favoriteFruit: 'banana',
date: ISODate("2014-08-21T11:37:18.000Z")
},
{
name: 'David French',
favoriteFruit: 'banana',
date: ISODate("2014-07-19T10:39:35.000Z")
},
....
..
..
],
gender: 'male'
}
]

24. Group all females by their favoriteFruit.

sample> db.users.aggregate([ { $match: { gender: 'female' } }, { $group: { _id: '$favoriteFruit', females: { $push: { name: '$name', favoriteFruit: '$favoriteFruit' } }} }, { $project: { _id: 0,favoriteFruit: '$_id', females: 1 } } ])

25. Scan all the document to retrieve all eyeColors(use db.COLLECTION_NAME.distinct);

sample> db.users.distinct('eyeColor')
[ 'blue', 'brown', 'green' ]

26. Find all apple loving blue eyed female working in 'USA'. Sort them by their registration date in descending order.

sample> db.users.aggregate([ { $match: { gender: 'female', favoriteFruit: 'apple', eyeColor: 'blue', 'company.location.country': 'USA' } }, { $sort: { registered: -1 } }] );

27. Find all 18+ inactive men and return only the fields specified below in the below provided format

```js
{
  name: "",
  email: '';
  identity: {
    eye: '',
    phone: '',
    location: ''
  }
}
```

sample> db.users.aggregate([ { $match: { gender: 'male', age: { $gt: 18 }, isActive: false } }, { $project: { name: 1, email: 1, identity: { eye: '$eyeColor', phone: '$company.phone', location: '$company.location' } } } ]);

[
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed13b"),
name: 'Dale Holman',
identity: {
eye: 'green',
phone: '+1 (871) 452-3036',
location: { country: 'Italy', address: '586 Blake Court' }
}
},
{
\_id: ObjectId("5ca6fa078e7cfba44f7ed135"),
name: 'Hays Wise',
identity: {
eye: 'green',
phone: '+1 (801) 583-3393',
location: { country: 'France', address: '795 Borinquen Pl' }
}
},
...
..
..
]
