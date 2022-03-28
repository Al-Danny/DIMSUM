/*==============================================================*/
/* DBMS name:      MySQL 4.0                                    */
/* Created on:     3/24/2022 10:48:26 PM                        */
/*==============================================================*/


drop index DIKIRIM_FK on AGEN_OR_TOKO;

drop table if exists AGEN_OR_TOKO;

drop table if exists SEMBAKO;

/*==============================================================*/
/* Table: AGEN_OR_TOKO                                          */
/*==============================================================*/
create table AGEN_OR_TOKO
(
   ID_INSTANSI                    char(10)                       not null,
   ID_SEMBAKO                     char(10),
   LOKASI                         char(10),
   primary key (ID_INSTANSI)
)
type = InnoDB;

/*==============================================================*/
/* Index: DIKIRIM_FK                                            */
/*==============================================================*/
create index DIKIRIM_FK on AGEN_OR_TOKO
(
   ID_SEMBAKO
);

/*==============================================================*/
/* Table: SEMBAKO                                               */
/*==============================================================*/
create table SEMBAKO
(
   ID_SEMBAKO                     char(10)                       not null,
   NAMA_SEMBAKO                   char(10),
   JUMLAH___STOK                  char(10),
   HARGA                          char(10),
   primary key (ID_SEMBAKO)
)
type = InnoDB;

alter table AGEN_OR_TOKO add constraint FK_DIKIRIM foreign key (ID_SEMBAKO)
      references SEMBAKO (ID_SEMBAKO) on delete restrict on update restrict;

