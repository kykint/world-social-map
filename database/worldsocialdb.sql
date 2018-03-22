--
-- PostgreSQL database dump
--

-- Dumped from database version 10.2
-- Dumped by pg_dump version 10.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET search_path = public, pg_catalog;

--
-- Name: t_gender; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE t_gender AS ENUM (
    'male',
    'female'
);


ALTER TYPE t_gender OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: usr; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE usr (
    user_id uuid DEFAULT gen_random_uuid() NOT NULL,
    email text NOT NULL,
    surname text,
    name text,
    patronimyc text,
    birthdate character(10),
    city text,
    password text NOT NULL,
    salt text
);


ALTER TABLE usr OWNER TO postgres;

--
-- Data for Name: usr; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY usr (user_id, email, surname, name, patronimyc, birthdate, city, password, salt) FROM stdin;
\.


--
-- Name: usr usr_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY usr
    ADD CONSTRAINT usr_email_key UNIQUE (email);


--
-- Name: usr usr_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY usr
    ADD CONSTRAINT usr_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

