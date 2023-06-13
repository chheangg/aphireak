#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER docker PASSWORD 'password';
	GRANT ALL PRIVILEGES ON DATABASE docker TO docker;
	CREATE DATABASE aphireak;
	\c aphireak;

EOSQL