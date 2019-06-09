create user postgres with createdb password 'postgres'

create if not exists database loja_ferramentas

create table if not exists tool_info (
	id serial,
	tool_title text not null,
	tool_link text not null,
	tool_description text not null,
	tool_tags text [],
	primary key (id)
);

insert into tool_info (tool_title, tool_link, tool_description, tool_tags) values
	('Notion', 'https://notion.so', 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ', array ['organization', 'planning', 'collaboration', 'writing', 'calendar']),
	('json-server', 'https://github.com/typicode/json-server', 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.', array ['api', 'json', 'schema', 'node', 'github', 'rest']),
	('fastify', 'https://www.fastify.io/', 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.', array ['web', 'framework', 'node', 'http2', 'https', 'localhost'])
