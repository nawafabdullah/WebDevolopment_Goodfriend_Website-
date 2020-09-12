create table Users (
	uid int NOT NULL AUTO_INCREMENT,
	email varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
	fname varchar(30),
	lname varchar(30),
	PRIMARY KEY(uid)
);

create table Restaurants (
	rid int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	PRIMARY KEY(rid)
);

create table FoodItems (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    description varchar(200),
    price decimal(6,2) NOT NULL,
    type varchar(30),
    restaurant int,
    PRIMARY KEY (fid),
    FOREIGN KEY (restaurant) REFERENCES Restaurants(rid)
);

create table Orders (
	oid int NOT NULL AUTO_INCREMENT,
	uid int,
	fid int,
	quantity int NOT_NULL,
	pricePaid decimal(6,2) NOT NULL,
	deliveryTime DATE,
	PRIMARY KEY (oid),
	FOREIGN KEY (uid) REFERENCES Users (uid),
	FOREIGN KEY (fid) REFERENCES FoodItems(fid)
);