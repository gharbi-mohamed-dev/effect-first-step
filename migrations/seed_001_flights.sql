BEGIN;
WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-01-10 duration(15d)', 58, 46, 56, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-01-10T02:41:12.172Z', '2025-01-10T09:05:58.189Z'),
	((select * from cte), 'jed', 'alg', '2025-01-25T02:41:12.172Z', '2025-01-25T09:36:29.924Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-01-21 duration(30d)', 80, 9, 56, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-01-21T02:41:12.172Z', '2025-01-21T08:19:33.542Z'),
	((select * from cte), 'med', 'alg', '2025-02-20T02:41:12.172Z', '2025-02-20T09:33:13.599Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-02-15 duration(15d)', 73, 56, 66, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-02-15T02:41:12.172Z', '2025-02-15T08:33:42.495Z'),
	((select * from cte), 'med', 'alg', '2025-03-02T02:41:12.172Z', '2025-03-02T08:45:14.861Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-02-27 duration(30d)', 84, 52, 39, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2025-02-27T02:41:12.172Z', '2025-02-27T09:29:16.817Z'),
	((select * from cte), 'jed', 'alg', '2025-03-29T02:41:12.172Z', '2025-03-29T08:54:42.509Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-03-10 duration(21d)', 61, 11, 56, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-03-10T02:41:12.172Z', '2025-03-10T09:05:55.107Z'),
	((select * from cte), 'med', 'alg', '2025-03-31T02:41:12.172Z', '2025-03-31T08:56:26.852Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-03-24 duration(30d)', 90, 84, 21, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-03-24T02:41:12.172Z', '2025-03-24T09:35:34.578Z'),
	((select * from cte), 'jed', 'alg', '2025-04-23T02:41:12.172Z', '2025-04-23T08:13:41.578Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-04-19 duration(21d)', 71, 1, 29, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-04-19T02:41:12.172Z', '2025-04-19T09:02:11.346Z'),
	((select * from cte), 'jed', 'alg', '2025-05-10T02:41:12.172Z', '2025-05-10T08:42:34.962Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-05-08 duration(30d)', 72, 42, 18, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2025-05-08T02:41:12.172Z', '2025-05-08T08:48:46.357Z'),
	((select * from cte), 'jed', 'alg', '2025-06-07T02:41:12.172Z', '2025-06-07T09:26:52.362Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-05-18 duration(21d)', 86, 59, 29, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2025-05-18T02:41:12.172Z', '2025-05-18T09:29:15.599Z'),
	((select * from cte), 'med', 'alg', '2025-06-08T02:41:12.172Z', '2025-06-08T09:20:36.229Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-06-15 duration(40d)', 68, 61, 11, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2025-06-15T02:41:12.172Z', '2025-06-15T08:17:12.285Z'),
	((select * from cte), 'med', 'alg', '2025-07-25T02:41:12.172Z', '2025-07-25T09:35:07.449Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-06-26 duration(40d)', 50, 11, 23, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-06-26T02:41:12.172Z', '2025-06-26T09:10:47.590Z'),
	((select * from cte), 'jed', 'alg', '2025-08-05T02:41:12.172Z', '2025-08-05T09:15:56.522Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-07-20 duration(15d)', 87, 14, 59, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-07-20T02:41:12.172Z', '2025-07-20T08:52:48.634Z'),
	((select * from cte), 'jed', 'alg', '2025-08-04T02:41:12.172Z', '2025-08-04T08:54:26.864Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-08-03 duration(15d)', 94, 11, 87, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2025-08-03T02:41:12.172Z', '2025-08-03T08:35:10.575Z'),
	((select * from cte), 'jed', 'alg', '2025-08-18T02:41:12.172Z', '2025-08-18T08:46:58.675Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-08-14 duration(40d)', 81, 38, 39, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-08-14T02:41:12.172Z', '2025-08-14T08:19:22.556Z'),
	((select * from cte), 'med', 'alg', '2025-09-23T02:41:12.172Z', '2025-09-23T09:15:03.369Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-09-08 duration(30d)', 89, 69, 80, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-09-08T02:41:12.172Z', '2025-09-08T09:30:09.595Z'),
	((select * from cte), 'jed', 'alg', '2025-10-08T02:41:12.172Z', '2025-10-08T08:41:07.554Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-09-25 duration(40d)', 87, 74, 10, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-09-25T02:41:12.172Z', '2025-09-25T09:29:29.670Z'),
	((select * from cte), 'med', 'alg', '2025-11-04T02:41:12.172Z', '2025-11-04T08:36:39.607Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-10-22 duration(30d)', 97, 12, 77, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-10-22T02:41:12.172Z', '2025-10-22T09:23:24.981Z'),
	((select * from cte), 'jed', 'alg', '2025-11-21T02:41:12.172Z', '2025-11-21T09:08:45.614Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-11-15 duration(30d)', 93, 34, 55, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2025-11-15T02:41:12.172Z', '2025-11-15T09:18:54.787Z'),
	((select * from cte), 'med', 'alg', '2025-12-15T02:41:12.172Z', '2025-12-15T08:33:41.776Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-12-09 duration(21d)', 66, 1, 47, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2025-12-09T02:41:12.172Z', '2025-12-09T08:26:37.419Z'),
	((select * from cte), 'jed', 'alg', '2025-12-30T02:41:12.172Z', '2025-12-30T08:11:31.106Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2025-12-21 duration(21d)', 78, 56, 17, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2025-12-21T02:41:12.172Z', '2025-12-21T08:16:06.312Z'),
	((select * from cte), 'med', 'alg', '2026-01-11T02:41:12.172Z', '2026-01-11T09:29:30.306Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-01-01 duration(30d)', 52, 3, 29, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-01-01T02:41:12.172Z', '2026-01-01T09:09:31.910Z'),
	((select * from cte), 'med', 'alg', '2026-01-31T02:41:12.172Z', '2026-01-31T08:50:33.102Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-01-16 duration(21d)', 69, 20, 64, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2026-01-16T02:41:12.172Z', '2026-01-16T08:22:42.830Z'),
	((select * from cte), 'jed', 'alg', '2026-02-06T02:41:12.172Z', '2026-02-06T08:19:38.259Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-02-04 duration(15d)', 85, 32, 68, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-02-04T02:41:12.172Z', '2026-02-04T09:14:31.619Z'),
	((select * from cte), 'jed', 'alg', '2026-02-19T02:41:12.172Z', '2026-02-19T09:13:06.172Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-02-27 duration(30d)', 83, 23, 67, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-02-27T02:41:12.172Z', '2026-02-27T09:25:15.262Z'),
	((select * from cte), 'med', 'alg', '2026-03-29T02:41:12.172Z', '2026-03-29T08:34:00.969Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-03-06 duration(21d)', 66, 40, 49, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2026-03-06T02:41:12.172Z', '2026-03-06T08:13:16.313Z'),
	((select * from cte), 'med', 'alg', '2026-03-27T02:41:12.172Z', '2026-03-27T08:24:53.109Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-03-14 duration(21d)', 91, 48, 57, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-03-14T02:41:12.172Z', '2026-03-14T09:14:55.239Z'),
	((select * from cte), 'jed', 'alg', '2026-04-04T02:41:12.172Z', '2026-04-04T08:22:17.419Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-04-07 duration(40d)', 55, 27, 16, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-04-07T02:41:12.172Z', '2026-04-07T09:21:12.516Z'),
	((select * from cte), 'med', 'alg', '2026-05-17T02:41:12.172Z', '2026-05-17T08:53:17.436Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-04-25 duration(21d)', 74, 17, 38, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-04-25T02:41:12.172Z', '2026-04-25T08:16:07.216Z'),
	((select * from cte), 'jed', 'alg', '2026-05-16T02:41:12.172Z', '2026-05-16T09:34:59.657Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-05-10 duration(15d)', 54, 28, 19, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2026-05-10T02:41:12.172Z', '2026-05-10T08:27:10.697Z'),
	((select * from cte), 'jed', 'alg', '2026-05-25T02:41:12.172Z', '2026-05-25T09:02:50.666Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-05-26 duration(15d)', 82, 12, 68, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2026-05-26T02:41:12.172Z', '2026-05-26T09:25:02.967Z'),
	((select * from cte), 'med', 'alg', '2026-06-10T02:41:12.172Z', '2026-06-10T09:09:05.190Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-06-12 duration(21d)', 95, 16, 22, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-06-12T02:41:12.172Z', '2026-06-12T08:42:10.785Z'),
	((select * from cte), 'jed', 'alg', '2026-07-03T02:41:12.172Z', '2026-07-03T08:32:14.098Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-07-06 duration(40d)', 79, 16, 32, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-07-06T02:41:12.172Z', '2026-07-06T08:30:13.226Z'),
	((select * from cte), 'med', 'alg', '2026-08-15T02:41:12.172Z', '2026-08-15T08:21:38.104Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-07-17 duration(30d)', 86, 43, 31, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2026-07-17T02:41:12.172Z', '2026-07-17T09:29:10.732Z'),
	((select * from cte), 'jed', 'alg', '2026-08-16T02:41:12.172Z', '2026-08-16T09:33:31.089Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-07-28 duration(30d)', 55, 27, 19, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-07-28T02:41:12.172Z', '2026-07-28T09:24:02.443Z'),
	((select * from cte), 'jed', 'alg', '2026-08-27T02:41:12.172Z', '2026-08-27T09:36:34.884Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-08-22 duration(40d)', 67, 20, 29, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-08-22T02:41:12.172Z', '2026-08-22T08:12:40.119Z'),
	((select * from cte), 'jed', 'alg', '2026-10-01T02:41:12.172Z', '2026-10-01T08:35:08.956Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-09-18 duration(15d)', 74, 44, 0, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-09-18T02:41:12.172Z', '2026-09-18T08:47:04.887Z'),
	((select * from cte), 'med', 'alg', '2026-10-03T02:41:12.172Z', '2026-10-03T08:48:45.091Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-10-08 duration(21d)', 86, 2, 9, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2026-10-08T02:41:12.172Z', '2026-10-08T08:39:45.330Z'),
	((select * from cte), 'jed', 'alg', '2026-10-29T02:41:12.172Z', '2026-10-29T08:13:48.647Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-11-05 duration(15d)', 66, 43, 3, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-11-05T02:41:12.172Z', '2026-11-05T08:57:58.912Z'),
	((select * from cte), 'jed', 'alg', '2026-11-20T02:41:12.172Z', '2026-11-20T09:16:47.254Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-12-01 duration(15d)', 83, 55, 73, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'jed', '2026-12-01T02:41:12.172Z', '2026-12-01T09:17:56.209Z'),
	((select * from cte), 'med', 'alg', '2026-12-16T02:41:12.172Z', '2026-12-16T08:15:29.740Z');

WITH cte AS (
  INSERT INTO flights (title, stock_total, stock_visible, stock_sold, airline_iata)
  VALUES ('@2026-12-19 duration(30d)', 66, 52, 5, 'ah')
  RETURNING id
)
INSERT INTO flight_segments (flight_id, from_iata, to_iata, departure_at, arrival_at)
	VALUES  ((select * from cte), 'alg', 'med', '2026-12-19T02:41:12.172Z', '2026-12-19T08:30:48.021Z'),
	((select * from cte), 'med', 'alg', '2027-01-18T02:41:12.172Z', '2027-01-18T09:19:05.545Z');
COMMIT;
