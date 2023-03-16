const validation = (userName) => {
  const errors = {};

  if (!userName.name) {
    return errors.name;
  } else if (userName.name.length < 4) {
    return errors.name;
  } else if (userName.name.length > 16) {
    return errors.name;
  } else {
    sessionStorage.setItem("name", userName.name);
  }

  return errors;
};

export default validation;