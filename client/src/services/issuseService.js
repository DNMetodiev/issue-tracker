const baseUrl = 'http://localhost:5000/api/issues'; // Adjust the URL as per your setup

export const fetchIssues = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error('Error fetching issues');
  }
  return response.json();
};

export const createIssue = async (issueData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issueData),
  });
  if (!response.ok) {
    throw new Error('Error creating issue');
  }
  return response.json();
};

export const updateIssue = async (id, issueData) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issueData),
  });
  if (!response.ok) {
    throw new Error('Error updating issue');
  }
  return response.json();
};

export const deleteIssue = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting issue');
  }
  return response.json();
};