// frontend/src/components/ParticipantPieChart.js
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4563'];

const ParticipantPieChart = ({ participants }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={participants}
        dataKey="participation"
        nameKey="firstName"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {participants.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default ParticipantPieChart;
