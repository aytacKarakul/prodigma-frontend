const displayMessages = (type, message) => {
  //const targetWrapper = document.querySelector(`${target}`);
  const wrapper = document.createElement("div");

  wrapper.className = `alert alert-${type}`;
  wrapper.textContent = message;

  //targetWrapper.appendChild(wrapper);

  setTimeout(() => {
    wrapper.remove();
  }, 2500);

  return wrapper;
};

export default displayMessages;
