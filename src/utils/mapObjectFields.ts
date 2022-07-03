export const mapIDField = (object) => {
  if (!object._id) return;

  object.id = object._id;
  delete object._id;
};

export const mapUserFields = (user) => {
  mapIDField(user);

  if (user.lastName) {
    user.secondName = user.lastName;
    delete user.lastName;
  }

  return user;
};
