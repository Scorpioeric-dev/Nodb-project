update uStyles 
set name = $2,
img = $3
where id = $1
returning *;