create database AgenciaViagensMod4;

use AgenciaViagensMod4;

/* ModeloLogico criado no BR modelo(com adaptações pessoais): */

CREATE TABLE Cliente (
    IdCliente int PRIMARY KEY identity(1,1),
    Nome nvarchar(50),
    Cpf nvarchar(11),
    Telefone nvarchar(11),
    Email nvarchar(50)
);

CREATE TABLE Pedido (
    IdPedido int PRIMARY KEY identity(1,1),
    DataPedido Date,
    fk_Cliente_IdCliente int
);

CREATE TABLE PedidoPromo (
    IdPedidoPromo int PRIMARY KEY identity(1,1),
    DataPedidoPromo Date,
    fk_Cliente_IdCliente int
);

CREATE TABLE Local (
    IdLocal int PRIMARY KEY identity(1,1),
    Descricao nvarchar(50),
    Preco real,
    fk_Pedido_IdPedido int
);

CREATE TABLE LocalPromo (
    PrecoPromo real,
    DescricaoPromo nvarchar(50),
    IdLocalPromo int PRIMARY KEY identity(1,1),
    fk_PedidoPromo_IdPedidoPromo int
);

CREATE TABLE Suporte (
    IdSuporte int PRIMARY KEY identity(1,1),
    Mensagem nvarchar(300),
    fk_Cliente_IdCliente int
);
 
ALTER TABLE Pedido ADD CONSTRAINT FK_Pedido
    FOREIGN KEY (fk_Cliente_IdCliente)
    REFERENCES Cliente (IdCliente)
    ON DELETE CASCADE;
 
ALTER TABLE PedidoPromo ADD CONSTRAINT FK_PedidoPromo
    FOREIGN KEY (fk_Cliente_IdCliente)
    REFERENCES Cliente (IdCliente)
    ON DELETE CASCADE;
 
ALTER TABLE Local ADD CONSTRAINT FK_Local
    FOREIGN KEY (fk_Pedido_IdPedido)
    REFERENCES Pedido (IdPedido)
    ON DELETE CASCADE;
 
ALTER TABLE LocalPromo ADD CONSTRAINT FK_LocalPromo
    FOREIGN KEY (fk_PedidoPromo_IdPedidoPromo)
    REFERENCES PedidoPromo (IdPedidoPromo)
    ON DELETE CASCADE;
 
ALTER TABLE Suporte ADD CONSTRAINT FK_Suporte
    FOREIGN KEY (fk_Cliente_IdCliente)
    REFERENCES Cliente (IdCliente)
    ON DELETE CASCADE;


	select * from Cliente;
	select * from Pedido;

	select * from Local;



select P.IdPedido, P.DataPedido, C.IdCliente, C.Nome, C.Cpf, C.Telefone, C.Email
from Pedido as P
inner join Cliente as C on P.fk_Cliente_IdCliente = C.IdCliente 




select L.IdLocal, L.Descricao,L.Preco, P.IdPedido, P.DataPedido, 
C.IdCliente, C.Nome, C.Cpf, C.Telefone, C.Email from Local as L
inner join Pedido as P on L.fk_Pedido_IdPedido = P.IdPedido
inner join Cliente as C on L.fk_Pedido_IdPedido = C.IdCliente

select * from LocalPromo;
select * from PedidoPromo;
select * from Suporte;


delete from PedidoPromo where IdPedidoPromo = 3;


select LP.IdLocalPromo, LP.DescricaoPromo,LP.PrecoPromo, PP.IdPedidoPromo, PP.DataPedidoPromo, 
C.IdCliente, C.Nome, C.Cpf, C.Telefone, C.Email from LocalPromo as LP inner join 
PedidoPromo as PP on LP.fk_PedidoPromo_IdPedidoPromo = PP.IdPedidoPromo inner join Cliente as C on 
PP.fk_Cliente_IdCliente = C.IdCliente;

select PP.IdPedidoPromo, PP.DataPedidoPromo, C.IdCliente, C.Nome, C.Cpf, C.Telefone, C.Email from PedidoPromo as PP inner join Cliente as C on PP.fk_Cliente_IdCliente = C.IdCliente;

select S.IdSuporte, C.IdCliente, C.Nome, C.Cpf, C.Telefone, C.Email, S.Mensagem from Suporte as S inner join Cliente as C on S.fk_Cliente_IdCliente = C.IdCliente;





		
