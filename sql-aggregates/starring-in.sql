select "name" as "category",
      count(*) as "no. of apperance"
from "categories"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actorId" = 178
group by "categories"."name"
order by "no. of apperance" desc;
