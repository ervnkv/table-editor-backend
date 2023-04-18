create TABLE degree(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

create TABLE employee(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    degree_id INTEGER,
    FOREIGN KEY (degree_id) REFERENCES degree (id)
);