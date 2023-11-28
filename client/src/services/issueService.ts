import { Issue } from '../models/interfaces';

const API_URL = 'http://localhost:5000/api/issues';

export const getIssues = async (): Promise<Issue[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching issues');
  }
  return response.json();
};

export const createIssue = async (issue: Omit<Issue, 'id'>): Promise<Issue> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issue),
  });
  if (!response.ok) {
    throw new Error('Error creating issue');
  }
  return response.json();
};

export const updateIssue = async (id: string, issue: Partial<Issue>): Promise<Issue> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issue),
  });
  if (!response.ok) {
    throw new Error('Error updating issue');
  }
  return response.json();
};

export const deleteIssue = async (id: string): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error deleting issue');
  }
  return response.json();
};
