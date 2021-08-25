# PairProjectPhase1
Pair Project Phase 1 Hactiv8


Table Scheme 
  https://drive.google.com/file/d/1QcxcsbsUsTKcJnLnFHjJ0DUZoXleiQ6l/view?usp=sharing
Application name
  Mental Health {blablabla}
M to M
  Patient[service user] and (Doctors || IG Accounts || Websites)[service provider]
  
Table User : {
    id
    first_name,
    last_name,
    DOB,
    problems,
    username,
    password
    }
Table Appointment: {
    id
    UserId, --- foreignkey
    ProviderId, --- foreignkey
    Appointment: {
        date,
        time,
    }
}
Service provider hanya per orangan saja atau institusi saja dulu nanti kalau ada waktu baru ditambahin
Table Provider : {
    id,
    first_name,
    last_name,
    address,
    website,
    instagram,
    serviceProvided, (diganti jadi SpId
    username,
    password
}

Tambahan
  Table Service Provided
    id
    Service Name

Create : Account has username and password
  Service users: [Account {contact detail}, session appointment]
  Service providers: [Account {contact detail}, available session schedule] 
Read : 
  Anyone can see their own account detail after logging in
Update :
  Anyone can change their account detail after logging in
Delete :
  Anyone can delete their account detail after logging in

Static Method
  ???
Instance Method
  Memunculkan Nyonya/Tuan pada users dan gelar untuk providers
Helper
  menghitung berapa [hari, jam, menit, waktu] menuju jadwal
Hooks
  ???
MVP 
  [
   https://www.npmjs.com/package/generate-password
   https://www.npmjs.com/package/nodemailer
  ]
Middleware
  router.use(express.urlencoded({extended: false})) ------- buatan sendiri katanya
Session
  ???
Deploy pada Heroku
  ???
serviceProvider = [ibunda.id, getkalm, relief, yangbelumsempat]
