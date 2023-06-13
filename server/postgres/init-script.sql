--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-06-13 10:41:18 +07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 21808)
-- Name: account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    enabled boolean DEFAULT true
);


ALTER TABLE public.account OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 21807)
-- Name: account_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.account ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.account_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 223 (class 1259 OID 21819)
-- Name: authorities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.authorities (
    id integer NOT NULL,
    role text NOT NULL,
    user_id integer
);


ALTER TABLE public.authorities OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 21818)
-- Name: authorities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.authorities ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.authorities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 21768)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    full_name text NOT NULL,
    phone_number text NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 21767)
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.customer ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 229 (class 1259 OID 21858)
-- Name: maintenance_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.maintenance_detail (
    id integer NOT NULL,
    product_id integer,
    quantity integer DEFAULT 0 NOT NULL,
    price integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.maintenance_detail OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 21857)
-- Name: maintenance_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.maintenance_detail ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.maintenance_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 231 (class 1259 OID 21871)
-- Name: maintnenace; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.maintnenace (
    id integer NOT NULL,
    account_id integer,
    customer_id integer,
    vehicle_id integer,
    total_cost integer DEFAULT 0 NOT NULL,
    paid boolean DEFAULT false,
    "timestamp" timestamp with time zone DEFAULT now(),
    maintenance_detail_id integer
);


ALTER TABLE public.maintnenace OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 21870)
-- Name: maintnenace_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.maintnenace ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.maintnenace_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 21842)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name text NOT NULL,
    type_id integer,
    recommended_price integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 21841)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.product ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 21780)
-- Name: service_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_detail (
    id integer NOT NULL,
    oil_type text NOT NULL,
    change_oil_filter boolean NOT NULL,
    change_coolant boolean NOT NULL,
    change_brake_fluid boolean NOT NULL,
    change_air_filter boolean NOT NULL,
    change_transmission boolean NOT NULL,
    car_checkup boolean NOT NULL,
    other text
);


ALTER TABLE public.service_detail OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 21779)
-- Name: service_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.service_detail ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.service_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 225 (class 1259 OID 21832)
-- Name: type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.type OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 21831)
-- Name: type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 21788)
-- Name: vehicle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehicle (
    id integer NOT NULL,
    plate_number text NOT NULL,
    vehicle_type text NOT NULL,
    vehicle_name text NOT NULL,
    next_service date NOT NULL,
    service_detail integer,
    customer_id integer
);


ALTER TABLE public.vehicle OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 21787)
-- Name: vehicle_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.vehicle ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.vehicle_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3499 (class 2606 OID 21815)
-- Name: account account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (id);


--
-- TOC entry 3501 (class 2606 OID 21817)
-- Name: account account_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account
    ADD CONSTRAINT account_username_key UNIQUE (username);


--
-- TOC entry 3503 (class 2606 OID 21825)
-- Name: authorities authorities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authorities
    ADD CONSTRAINT authorities_pkey PRIMARY KEY (id);


--
-- TOC entry 3487 (class 2606 OID 21776)
-- Name: customer customer_full_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_full_name_key UNIQUE (full_name);


--
-- TOC entry 3489 (class 2606 OID 21778)
-- Name: customer customer_phone_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_phone_number_key UNIQUE (phone_number);


--
-- TOC entry 3491 (class 2606 OID 21774)
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- TOC entry 3513 (class 2606 OID 21864)
-- Name: maintenance_detail maintenance_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maintenance_detail
    ADD CONSTRAINT maintenance_detail_pkey PRIMARY KEY (id);


--
-- TOC entry 3515 (class 2606 OID 21878)
-- Name: maintnenace maintnenace_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maintnenace
    ADD CONSTRAINT maintnenace_pkey PRIMARY KEY (id);


--
-- TOC entry 3509 (class 2606 OID 21851)
-- Name: product product_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_name_key UNIQUE (name);


--
-- TOC entry 3511 (class 2606 OID 21849)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 3493 (class 2606 OID 21786)
-- Name: service_detail service_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_detail
    ADD CONSTRAINT service_detail_pkey PRIMARY KEY (id);


--
-- TOC entry 3505 (class 2606 OID 21840)
-- Name: type type_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_name_key UNIQUE (name);


--
-- TOC entry 3507 (class 2606 OID 21838)
-- Name: type type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pkey PRIMARY KEY (id);


--
-- TOC entry 3495 (class 2606 OID 21794)
-- Name: vehicle vehicle_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_pkey PRIMARY KEY (id);


--
-- TOC entry 3497 (class 2606 OID 21796)
-- Name: vehicle vehicle_plate_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_plate_number_key UNIQUE (plate_number);


--
-- TOC entry 3518 (class 2606 OID 21826)
-- Name: authorities authorities_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authorities
    ADD CONSTRAINT authorities_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.account(id);


--
-- TOC entry 3520 (class 2606 OID 21865)
-- Name: maintenance_detail maintenance_detail_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maintenance_detail
    ADD CONSTRAINT maintenance_detail_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- TOC entry 3521 (class 2606 OID 21879)
-- Name: maintnenace maintnenace_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maintnenace
    ADD CONSTRAINT maintnenace_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id);


--
-- TOC entry 3522 (class 2606 OID 21884)
-- Name: maintnenace maintnenace_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maintnenace
    ADD CONSTRAINT maintnenace_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3523 (class 2606 OID 21894)
-- Name: maintnenace maintnenace_maintenance_detail_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maintnenace
    ADD CONSTRAINT maintnenace_maintenance_detail_id_fkey FOREIGN KEY (maintenance_detail_id) REFERENCES public.maintenance_detail(id);


--
-- TOC entry 3524 (class 2606 OID 21889)
-- Name: maintnenace maintnenace_vehicle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.maintnenace
    ADD CONSTRAINT maintnenace_vehicle_id_fkey FOREIGN KEY (vehicle_id) REFERENCES public.vehicle(id);


--
-- TOC entry 3519 (class 2606 OID 21852)
-- Name: product product_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.type(id);


--
-- TOC entry 3516 (class 2606 OID 21802)
-- Name: vehicle vehicle_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3517 (class 2606 OID 21797)
-- Name: vehicle vehicle_service_detail_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_service_detail_fkey FOREIGN KEY (service_detail) REFERENCES public.service_detail(id);


-- Completed on 2023-06-13 10:41:18 +07

--
-- PostgreSQL database dump complete
--

