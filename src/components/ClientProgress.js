import React from 'react';
import './ClientProgress.css';

function ClientProgress() {
  const clients = [
    {
      name: 'Alex Martin',
      comment: 'SuppliesPro helped me reach my muscle-building goals with their high-quality supplements.',
      image: `${process.env.PUBLIC_URL}/images/alex-progress.jpg`, // Single before/after image
      progress: 'Weight lifted: 200kg to 240kg'
    },
    {
      name: 'Julie Dupont',
      comment: 'Thanks to SuppliesPro equipment, I was able to train effectively at home.',
      image: `${process.env.PUBLIC_URL}/images/julie-progress.jpg`, // Single before/after image
      progress: 'Improved endurance: 20min to 45min cardio'
    },
    // Add more clients here
  ];

  return (
    <div className="client-progress">
      <h1>Our Clients' Progress</h1>
      <div className="clients">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <h2>{client.name}</h2>
            <p>{client.comment}</p>
            <div className="images">
              <img src={client.image} alt={`${client.name} progress`} />
            </div>
            <p>{client.progress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientProgress;
