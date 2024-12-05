CREATE TABLE programs_flights (
    id BIGSERIAL PRIMARY KEY,

    program_id BIGINT NOT NULL,
		CONSTRAINT fk_program
			FOREIGN KEY(program_id)
			REFERENCES programs("id")
			ON DELETE CASCADE
			ON UPDATE CASCADE, 
    flight_id BIGINT NOT NULL, 
		CONSTRAINT fk_flight 
			FOREIGN KEY(flight_id)
			REFERENCES flights("id")
			ON DELETE CASCADE
			ON UPDATE CASCADE,

	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
		CONSTRAINT created_at_gte_now CHECK (created_at >= NOW()),
	deleted_at TIMESTAMPTZ 
		CONSTRAINT deleted_at_gte_now CHECK (deleted_at IS NULL or deleted_at >= NOW())
);
