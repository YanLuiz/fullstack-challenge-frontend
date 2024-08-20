// frontend/src/components/ParticipantForm.js
import React, { useState } from 'react';
import { createParticipant } from '../../services/api';
import { Container } from './style';

const ParticipantForm = ({ onParticipantAdded }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participation, setParticipation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const participant = { firstName, lastName, participation: Number(participation) };
      await createParticipant(participant);
      onParticipantAdded();
      setFirstName('');
      setLastName('');
      setParticipation('');
    } catch (err) {
      console.error('Error adding participant:', err.response?.data?.error || err.message);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Participation (%)"
        value={participation}
        onChange={(e) => setParticipation(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </Container>
  );
};

export default ParticipantForm;
