# MySQL

* Access database
  * ```mysql -u {userName} -p {dbName}```
  * DB password
* Reset database
  * ```mysql -u root -p < DB/{file}.sql```


## Commands

* ctrl option l - clear screen
* SELECT {table};
* desc {table};
* START TRANSACTION;
* INERT INTO ; 
* VALUES ();
* COMMIT;
* ROLLBACK;
* ORDER BY ;
* SELECT COUNT(*) FROM ;
* Statement.RETURN_GENERATED_KEYS


## Reference Commands

* Many to many join 
CREATE TABLE StudentCourses (
    StudentID INT,
    CourseID INT,
    Grade CHAR(2),
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

select s.id, a.city, a.state_province, m.first_name, m.last_name from store s join address a on s.address_id = a.id left outer join staff m on s.manager_id = m.id;

select s.id, a.city, a.state_province, m.first_name, m.last_name, ma.address from store s
join address a on s.address_id = a.id left outer join staff m on s.manager_id = m.id
left outer join address ma on m.address_id = ma.id;

select r.rental_date, r.return_date, p.amount from rental r left outer join payment p on p.rental_id = r.id;

select r.rental_date, r.return_date, p.amount from rental r left outer join payment p on p.rental_id = r.id
where p.amount IS NULL;

select e.id, e.first_name, e.last_name, sa.city, sa.state_province, e.supervisor_id from staff e join store s
on e.store_id = s.id join address sa on s.address_id = sa.id;

select e.id, e.first_name, e.last_name, sa.city, sa.state_province, e.supervisor_id, sup.last_name from staff e join store s
on e.store_id = s.id join address sa on s.address_id = sa.id join staff sup on e.supervisor_id = sup.id;

select e.id, e.first_name, e.last_name, sa.city, sa.state_province, e.supervisor_id, sup.last_name from staff e join store s
on e.store_id = s.id join address sa on s.address_id = sa.id left outer join staff sup on e.supervisor_id = sup.id;

select e.id, CONCAT(e.first_name, " ", e.last_name) as employee, sa.city, sa.state_province,
e.supervisor_id, CONCAT(sup.first_name, " ", sup.last_name) as supervisor,
CONCAT(mgr.first_name, " ", mgr.last_name) as manager from staff e join store s
on e.store_id = s.id join address sa on s.address_id = sa.id left outer join staff sup on e.supervisor_id = sup.id
join staff mgr on s.manager_id = mgr.id order by sa.city, sa.state_province;

select count(*) from staff where store_id = 1;

select count(*) from staff e join address a on e.address_id = a.id
where e.store_id = 1 AND a.city LIKE '%SEATTLE%';

select count(username) from staff;

select AVG(length) from film;

select min(rental_rate), avg(rental_rate), max(rental_rate) from film;

select title, length from film where rental_rate = (select max(rental_rate) from film);

select title, length from film where rental_rate > (select avg(rental_rate) from film);

select sum(amount) from payment join rental on rental_id = rental.id where staff_id = 114;

select sum(amount) from payment join rental on rental_id = rental.id join customer on customer_id = customer.id
join address on address_id = address.id where state_province = 'California';

select state_province, count(*) from staff join address on address_id = address.id
group by state_province;

select store.id, count(rental.id), sum(amount) from payment
join rental on rental_id = rental.id
join inventory_item on inventory_id = inventory_item.id
join store on store_id = store.id
group by store.id;

select store.id, count(rental.id), sum(amount) from payment
join rental on rental_id = rental.id
join inventory_item on inventory_id = inventory_item.id
join store on store_id = store.id
group by store.id
having count(rental.id) > 10000;

select state_province, active, count(*) from staff
join store on store_id = store.id
join address on store.address_id = address.id
group by state_province, active;

select rating, count(*) from rental
join inventory_item on inventory_id = inventory_item.id
join film on film_id = film.id
group by rating
order by count(*) desc;

select count(*) from rental;