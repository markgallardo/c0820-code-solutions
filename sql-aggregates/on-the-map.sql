select "countries"."name" as "country",
      count(*) as "cities count"
from "countries"
join "cities" using ("countryId")
group by "countryId";
