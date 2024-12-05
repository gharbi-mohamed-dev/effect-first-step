CREATE TABLE programs (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL UNIQUE, 
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
		CONSTRAINT created_at_gte_now CHECK (created_at >= NOW())
)
