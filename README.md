# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


database設計

Usersテーブル
|column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false,|
|group_id|intger|null: false, foreign_key: true|

  Association
-has_many :messages
-has_many :users_groups


Groupsテーブル
|column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|
|user_id|intger|null: false, foreign_key: true|

 Association
-has_many :messages
-has_many :users_groups


messagesテーブル
|column|Type|Options|
|------|----|-------|
|body|string|null: false|
|image|string||
|user_id|intger|null: false, foreign_key: true|
|group_id|intger|null: false, foreign_key: true|

  Association
-belongs_to :group
-belongs_to :user


user_groupテーブル
|column|Type|Options|
|------|----|-------|
|user_id|intger|null: false, foreign_key: true|
|group_id|intger|null: false, foreign_key: true|

   Association
-belongs_to :group
-belongs_to :user