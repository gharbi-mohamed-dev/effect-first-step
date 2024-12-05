BEGIN;
WITH CTE as(
    INSERT INTO programs (title) VALUES  ('omra 2025') RETURNING id
) INSERT INTO programs_flights (program_id, flight_id)
    VALUES 
    ((select id from CTE), 1),
    ((select id from CTE), 3),
    ((select id from CTE), 12),
    ((select id from CTE), 13);

COMMIT;
