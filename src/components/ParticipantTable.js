// frontend/src/components/ParticipantTable.js
import React from 'react';

const ParticipantTable = ({ participants }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
        </tr>
      </thead>
      <tbody>
        {participants.map((participant, index) => (
          <tr key={index}>
            <td>{participant.firstName}</td>
            <td>{participant.lastName}</td>
            <td>{participant.participation}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParticipantTable;
