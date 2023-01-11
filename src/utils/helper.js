export const generateUUID = (length) => {
  let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ";
  let uuid = [];
  for (let i = 0; i < length; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join("");
};

export const SCREEN_NAME = {
  TODOS: "Todos",
  ADD_TODO: "Add Todo",
};
