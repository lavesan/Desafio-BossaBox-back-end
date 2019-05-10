create database loja_ferramentas

create table if not exists tool_info (
	id serial,
	tool_title text not null,
	tool_link text not null,
	tool_description text not null,
	tool_tags text [],
	primary key (id)
);