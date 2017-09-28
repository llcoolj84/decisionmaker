
// const authenUserByEmailPassword = function (aaa, bbb) { // Authen user by email and password
//   console.log(knex);
//   console.log(knexConfig);
//   console.log(ENV);

module.exports.getUsers = (knex) => {
  return knex.select("*").from("users");
}

  // for (let oneUser in users) {
  //   if (email === users[oneUser].email && bcrypt.compareSync(password, users[oneUser].hashedPwd)) {
  //   return users[oneUser].id;
  //   }
  // }
// }
