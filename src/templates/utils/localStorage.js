export const getLanguage = function () {
  return localStorage.getItem("lang");
};

export const getUserId = function () {
  const authUser = localStorage.getItem("login_hash") || null;
  if (authUser) {
    const userParser = JSON.parse(authUser);
    return userParser.id;
  }
};

export const getUser = function () {
  const authUser = localStorage.getItem("login_hash") || null;
  if (authUser) {
    const userParser = JSON.parse(authUser);
    return userParser;
  }
};
