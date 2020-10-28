select "firstName",
       "lastName",
       sum("amount") as "total paid"
from "customers" as "c"
join "payments" using ("customerId")
group by "c"."firstName",
        "c"."lastName"
order by "total paid" desc;
