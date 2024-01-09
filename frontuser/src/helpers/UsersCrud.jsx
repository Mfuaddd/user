export const userPost = async (data) => {
  await fetch("http://localhost:3100/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const userDelete = async (id) => {
  await fetch(`http://localhost:3100/${id}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
