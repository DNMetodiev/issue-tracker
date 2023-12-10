import { Issue } from '../models/interfaces';

const API_URL = 'http://localhost:5000/api/issues';

export const getIssues = async (status: 'Open' | 'Closed', page: number = 1, limit: number = 5): Promise<Issue[]> => {
  const url = new URL(API_URL);
  url.searchParams.append('status', status === 'Closed' ? 'historical' : 'ongoing');
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.issues;
};

export const createIssue = async (issueData: Omit<Issue, 'id'>): Promise<Issue> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issueData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const deleteIssue = async (id: string): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const updateIssue = async (id: string, issueData: Partial<Issue>): Promise<Issue> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issueData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};