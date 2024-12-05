CREATE TABLE  "flights" (
    id BIGSERIAL PRIMARY KEY,
    title TEXT, 
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
		CONSTRAINT created_at_gte_now CHECK (created_at >= NOW()),
    stock_total INTEGER NOT NULL 
		CONSTRAINT stock_total_positive 
		check  (stock_total >= 0),
    stock_visible INTEGER NOT NULL
		CONSTRAINT stock_visible_lte_stock_total 
		check (stock_visible >= 0 and stock_visible <= stock_total),
    stock_sold INTEGER NOT NULL DEFAULT 0
		CONSTRAINT stock_sold_lte_stock_total 
		check (stock_sold >= 0 and stock_sold <= stock_total),
    airline_iata CHAR(2) NOT NULL
		CONSTRAINT airline_iata_in
		check (airline_iata in ('ah', 'sv', 'ek', 'tk'))
);


