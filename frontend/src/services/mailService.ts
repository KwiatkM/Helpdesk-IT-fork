import { fetchWithAuth } from './api';
import type { SendMailRequest } from '../types';

export const mailService = {
  // Wyślij email
  async sendMail(data: SendMailRequest): Promise<void> {
    const response = await fetchWithAuth('/mail', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Failed to send email');
    }
  },
};
