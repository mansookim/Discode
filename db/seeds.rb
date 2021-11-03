# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
u0 = User.create!(username: "demo", email: "demo@gmail.com", dob: "1999-09-09", password: "password", tag: 4171)
u1 = User.create!(username: "mansoo", email: "mansoo@gmail.com", dob: "1993-06-09", password: "minnie", tag: 4171)
u2 = User.create!(username: "semmay", email: "emmay@gmail.com", dob: "1998-02-26", password: "squirrel")
u3 = User.create!(username: "wood", email: "wood@gmail.com", dob: "1997-03-04", password: "shiroo")
u4 = User.create!(username: "stelluhhh", email: "stelluhhh@gmail.com", dob: "1997-09-13", password: "dabiii")
u5 = User.create!(username: "8eanie", email: "soybean@gmail.com", dob: "1996-04-08", password: "mickey")
u6 = User.create!(username: "suzinator", email: "suzi@gmail.com", dob: "1994-07-29", password: "porotyg")
u7 = User.create!(username: "soheep", email: "soh@gmail.com", dob: "1991-01-14", password: "cometony")
u8 = User.create!(username: "the beef", email: "beefy@gmail.com", dob: "1996-07-07", password: "immortal")
u9 = User.create!(username: "arebiter", email: "arebiter@gmail.com", dob: "1996-09-14", password: "bellpedro")
u10 = User.create!(username: "mothammer", email: "mothammer@gmail.com", dob: "1988-04-22", password: "kimmmm")

# Servers
s1 = Server.create!(name: "True Study Buddies Come to FL", owner_id: u1.id)
ms10 = Membership.create!(user_id: u0.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms11 = Membership.create!(user_id: u1.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms12 = Membership.create!(user_id: u2.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms13 = Membership.create!(user_id: u3.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms14 = Membership.create!(user_id: u4.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms15 = Membership.create!(user_id: u5.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms16 = Membership.create!(user_id: u6.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms17 = Membership.create!(user_id: u7.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms18 = Membership.create!(user_id: u9.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms19 = Membership.create!(user_id: u10.id, joinable_id: s1.id, joinable_type: s1.class.name)

s2 = Server.create!(name: "One Brain One Cohort", owner_id: u3.id)
ms20 = Membership.create!(user_id: u0.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms21 = Membership.create!(user_id: u1.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms22 = Membership.create!(user_id: u2.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms23 = Membership.create!(user_id: u3.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms24 = Membership.create!(user_id: u4.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms25 = Membership.create!(user_id: u5.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms26 = Membership.create!(user_id: u6.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms27 = Membership.create!(user_id: u7.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms28 = Membership.create!(user_id: u9.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms29 = Membership.create!(user_id: u10.id, joinable_id: s2.id, joinable_type: s2.class.name)

s3 = Server.create!(name: "Lunch League Crew", owner_id: u5.id)
ms30 = Membership.create!(user_id: u0.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms31 = Membership.create!(user_id: u1.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms32 = Membership.create!(user_id: u2.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms33 = Membership.create!(user_id: u5.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms34 = Membership.create!(user_id: u6.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms35 = Membership.create!(user_id: u8.id, joinable_id: s3.id, joinable_type: s3.class.name)

# Channels
c11 = Channel.create!(name: "general", server_id: s1.id)
c12 = Channel.create!(name: "code", server_id: s1.id)
c13 = Channel.create!(name: "memes", server_id: s1.id)

c21 = Channel.create!(name: "general", server_id: s2.id)
c22 = Channel.create!(name: "homework-help", server_id: s2.id)
c23 = Channel.create!(name: "resources", server_id: s2.id)

c31 = Channel.create!(name: "general", server_id: s3.id)

# Conversations
co1 = Conversation.create!()

mc10 = Membership.create!(user_id: u0.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc11 = Membership.create!(user_id: u1.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc12 = Membership.create!(user_id: u2.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc13 = Membership.create!(user_id: u3.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc14 = Membership.create!(user_id: u4.id, joinable_id: co1.id, joinable_type: co1.class.name)
co1.update(name: "AAAA")

m1 = Message.create!(sender_id: u1.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "hi")
m2 = Message.create!(sender_id: u2.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "hello")
m3 = Message.create!(sender_id: u3.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "hullo")
m4 = Message.create!(sender_id: u4.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "bye")

co2 = Conversation.create()
mc20 = Membership.create!(user_id: u0.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc21 = Membership.create!(user_id: u1.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc22 = Membership.create!(user_id: u2.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc23 = Membership.create!(user_id: u5.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc24 = Membership.create!(user_id: u6.id, joinable_id: co2.id, joinable_type: co2.class.name)

co3 = Conversation.create()
mc30 = Membership.create!(user_id: u0.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc31 = Membership.create!(user_id: u4.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc32 = Membership.create!(user_id: u5.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc33 = Membership.create!(user_id: u6.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc34 = Membership.create!(user_id: u7.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc35 = Membership.create!(user_id: u2.id, joinable_id: co3.id, joinable_type: co3.class.name)
co3.update(name: "4s")
