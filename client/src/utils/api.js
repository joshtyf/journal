export function getPosts() {
  return fetch("/api");
}

export function getPost(id) {
  return fetch(`/api/${id}`);
}

export function createPost(title, content) {
  const body = {
    title: title,
    content: content,
    updated_at: new Date().toISOString(),
  };

  return fetch("/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function updatePost(id, title, content) {
  const body = {
    id: id,
    title: title,
    content: content,
    updated_at: new Date().toISOString(),
  };

  return fetch(`/api/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function deletePost(id) {
  return fetch(`/api/${id}`, {
    method: "DELETE",
  });
}
