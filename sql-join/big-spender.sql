select "firstName",
        "lastName"
from "customers"
join  "payments" using ("customerId")
order by "ammount" desc
limit 10;
