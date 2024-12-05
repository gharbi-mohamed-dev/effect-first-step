CREATE TABLE flight_segments (
	id BIGSERIAL PRIMARY KEY,
	flight_id BIGINT NOT NULL, 
		CONSTRAINT fk_flight FOREIGN KEY(flight_id) REFERENCES flights("id")
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	from_iata CHAR(3) NOT NULL
		CONSTRAINT from_iata_value_in CHECK (from_iata in ('alg', 'jed', 'med')),
	to_iata CHAR(3) NOT NULL
		CONSTRAINT value_in CHECK (from_iata in ('alg', 'jed', 'med')),
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
		CONSTRAINT created_at_gte_now CHECK (created_at >= NOW()),
	departure_at TIMESTAMPTZ NOT NULL 
		CONSTRAINT departure_at_gte_now CHECK (created_at >= NOW()),
	arrival_at TIMESTAMPTZ NOT NULL 
		CONSTRAINT arrival_at_gt_departure_at CHECK (arrival_at > departure_at)
);
