function displayMessages(type, message, target) {
  const wrapper = document.createElement("div");
  wrapper.className = `alert alert-${type}`;
  wrapper.textContent = message;

  document.querySelector(`.${target}`).append();

  setTimeout(() => {
    //document.querySelector(target).remove();
  }, 2500);

  return wrapper;
}

export default displayMessages;
