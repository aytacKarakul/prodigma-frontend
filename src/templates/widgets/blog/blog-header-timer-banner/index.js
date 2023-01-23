export const activityBlogButton = () => {
  const btn = document.querySelector("#js-blog-activity-join-btn");
  const blogForm = document.querySelector(".pwebinar-body-form");

  if (btn) {
    btn.addEventListener("click", () => {
      blogForm?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
  }
};
