# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150312234604) do

  create_table "comments", force: true do |t|
    t.text     "body"
    t.string   "polycomment_id"
    t.string   "polycomment_type"
    t.integer  "user_id"
    t.boolean  "issue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["polycomment_type", "polycomment_id"], name: "index_comments_on_polycomment_type_and_polycomment_id"

  create_table "delayed_jobs", force: true do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "queue"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority"

  create_table "glitterposts", force: true do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "identities", force: true do |t|
    t.integer  "user_id"
    t.string   "provider"
    t.string   "uid"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "issues", force: true do |t|
    t.text     "title"
    t.text     "description"
    t.integer  "project_id"
    t.integer  "user_id"
    t.integer  "status"
    t.integer  "type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notification_statuses", force: true do |t|
    t.integer  "victim_id"
    t.integer  "notification_id"
    t.boolean  "seen"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notifications", force: true do |t|
    t.integer  "actor_id"
    t.integer  "action"
    t.integer  "object_type"
    t.integer  "object_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "project_followers", force: true do |t|
    t.integer  "project_id"
    t.integer  "follower_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", force: true do |t|
    t.string   "name"
    t.integer  "repo_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.string   "data_path"
    t.boolean  "private",    default: false
    t.string   "uniqueurl"
    t.string   "urlbase"
    t.string   "ancestry"
    t.datetime "deleted_at"
  end

  add_index "projects", ["ancestry"], name: "index_projects_on_ancestry"
  add_index "projects", ["deleted_at"], name: "index_projects_on_deleted_at"
  add_index "projects", ["name", "user_id"], name: "index_projects_on_name_and_user_id", unique: true

  create_table "pull_requests", force: true do |t|
    t.string   "desc"
    t.string   "lastcommit"
    t.string   "status"
    t.integer  "parent"
    t.integer  "fork"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pulltable", force: true do |t|
    t.string   "desc"
    t.string   "status"
    t.string   "lastcommit"
    t.integer  "fork"
    t.integer  "parent"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "relationships", force: true do |t|
    t.integer  "follower_id"
    t.integer  "following_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "relationships", ["follower_id"], name: "index_relationships_on_follower_id"
  add_index "relationships", ["following_id"], name: "index_relationships_on_following_id"

  create_table "sessions", force: true do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at"

  create_table "users", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "username"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.string   "name"
    t.datetime "remember_created_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
