drop table uStyles;

Create Table uStyles(
 id serial primary key,
 name VARCHAR(50),
 img TEXT );


insert into uStyles(name,img)
Values('Buzzcut','https://www.menshairstylestoday.com/wp-content/uploads/2016/01/High-Buzz-Cut-Fade-Line-in-Hair.jpg'),
('fade','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZcDc5ACB_dhiImm7oG_YPtE1kWwJzQ2SZf6ACNPBQ9YqP6PZIg'),
('Pompadour','https://www.menshairstylestoday.com/wp-content/uploads/2017/05/Low-Skin-Fade-Pompadour.jp'),
('mohawk','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YeuNVbVXmt0Ml7tC-MZzen_OiX-h283kXAMWinkFiUHxIb_W7A'),
('short tape','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F0G4rCdYkiKnGM1--uIfu7gXytj9zYqMdZ5iftKCsqnkIfkI'),
('kid cut','https://i.pinimg.com/originals/93/00/fa/9300fa96ddeb652e0d2a6ce9754ed250.jpg'),
('barbers choice','http://4.bp.blogspot.com/-FwKlcbr_jy4/UEWR2pj__7I/AAAAAAAAGcQ/-smfzSoFf3A/s1600/bad-haircut5.jpg'),
('pixie cut','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O2qwJO7Is6FBV-37FKZ0JP1NmfJ0r4O5U3Uf6a5Oe_eh8yEo');


select * from uStyles;

delete from uStyles
where id = 1;

update uStyles 
set name = 'future',
img = 'https://media.istockphoto.com/photos/beautiful-blonde-model-with-futuristic-haircut-picture-id944099202'
where id = 1
returning *;